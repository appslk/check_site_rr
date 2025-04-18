import { useState } from "react";
import { useNavigate, Link } from "react-router";
import Web3 from "web3";

import VideoSection from "../components/auth/VideoSection";
import FormSection from "../components/auth/FormSection";
import OutlineButton from "../components/ui/buttons/OutlineButton";
import MetamaskIcon from "../components/ui/icons/MetamaskIcon";
import InputGroup from "../components/ui/inputs/InputGroup";
import GradientButton from "../components/ui/buttons/GradientButton";

import brickBgWebp from "../assets/images/brick-bg.webp";
import brickBgJpg from "../assets/images/brick-bg.jpg";
import { ABI, contractAddress } from "../../contractABI";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      setError("");
      setSuccess("");

      if (!window.ethereum) {
        throw new Error("Please install MetaMask to connect your wallet");
      }

      const web3 = new Web3(window.ethereum);
      
      // Check if connected to Optimism - FIXED: Use string comparison for chainId
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (chainId !== '0xa') { // Use string comparison
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xa' }], // Use string format
          });
        } catch (switchError) {
          // If the network doesn't exist in MetaMask, add it
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0xa', // Use string format
                chainName: 'Optimism',
                nativeCurrency: {
                  name: 'Ether',
                  symbol: 'ETH',
                  decimals: 18
                },
                rpcUrls: ['https://mainnet.optimism.io'],
                blockExplorerUrls: ['https://optimistic.etherscan.io']
              }],
            });
          } else {
            throw switchError;
          }
        }
      }

      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
      });

      if (accounts.length === 0) {
        throw new Error("No accounts found");
      }

      setWalletAddress(accounts[0]);
      setIsConnecting(false);
    } catch (err) {
      console.error("Wallet connection error:", err);
      setError(err.message);
      setIsConnecting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    if (!walletAddress) {
      setError("Please connect your wallet first");
      return;
    }

    try {
      setIsRegistering(true);
      setError("");
      setSuccess("");

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, contractAddress);
      const accounts = await web3.eth.getAccounts();

      // Check if user already exists
      try {
        const user = await contract.methods.getUser(accounts[0]).call();
        if (user && user[2]) { // Check isRegistered flag
          setError("This wallet is already registered");
          setIsRegistering(false);
          return;
        }
      } catch (error) {
        // If getUser fails but not because user doesn't exist, handle that error
        if (!error.message.includes("User not found")) {
          console.error("Error checking user:", error);
        }
      }

      // Estimate gas with extra buffer to handle potential revert
      let gasEstimate;
      try {
        gasEstimate = await contract.methods
          .register(username)
          .estimateGas({ from: accounts[0] });
        
        // Add 50% buffer for gas limit
        gasEstimate = Math.floor(gasEstimate * 1.5);
      } catch (gasError) {
        console.error("Gas estimation error:", gasError);
        // If gas estimation fails, use a safe default
        gasEstimate = 200000;
      }

      // Send transaction with proper gas limit
      const tx = await contract.methods
        .register(username)
        .send({ 
          from: accounts[0],
          gas: gasEstimate
        });

      // Wait for transaction to be mined
      if (tx.status) {
        setSuccess("Registration successful! Redirecting...");
        setTimeout(() => navigate("/sign-in"), 2000);
      } else {
        throw new Error("Transaction failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      
      // Improved error handling
      if (err.message.includes("User already registered")) {
        setError("This wallet is already registered");
      } else if (err.message.includes("revert")) {
        const revertReason = err.message.split("revert")[1]?.trim() || "Unknown reason";
        setError(`Registration failed: ${revertReason}`);
      } else if (err.message.includes("gas")) {
        setError("Transaction failed: Not enough gas. Please try again with higher gas limit.");
      } else if (err.message.includes("nonce")) {
        setError("Transaction failed: Nonce error. Please reset your MetaMask account.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <section className="font-montserrat homepage relative flex h-dvh min-h-dvh w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-[#0A0A0A] bg-cover bg-center text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
      {/* Brick bg */}
      <picture>
        <source srcSet={brickBgWebp} />
        <img
          src={brickBgJpg}
          alt="Hero background"
          className="fixed inset-0 size-full object-cover"
        />
      </picture>

      {/* Black tint */}
      <div className="fixed inset-0 size-full bg-black/70"></div>

      {/* leaklight */}
      <div className="bg-primary/10 absolute inset-0 m-auto aspect-square w-3/4 rounded-full blur-[100px] sm:w-3/5 lg:w-1/2"></div>

      <Link to="/home">
        <GradientButton className="absolute top-[50px] right-[50px] z-50 uppercase">
          Back to home
        </GradientButton>
      </Link>

      {/* Sign in form container */}
      <div className="section-padding relative container m-auto">
        <div className="mx-auto grid max-h-[700px] w-full max-w-[360px] grid-cols-1 gap-[2em] sm:w-3/5 sm:max-w-none lg:w-3/4 lg:grid-cols-2 xl:w-[65%] 2xl:w-3/5">
          {/* Video area */}
          <VideoSection
            title="Join the syndicate"
            desc="The future is now. Secure your place in the Syndicate and unlock access to exclusive NFT perks, events, and rewards."
          />

          {/* Sign up form */}
          <FormSection handleSubmit={handleSubmit}>
            {/* Title for small screens (md and below) */}
            <h2 className="text-center text-[2em] font-bold lg:hidden">
              Create An Account
            </h2>

            <p className="text-center">
              Choose a username and connect your MetaMask wallet.
            </p>

            {error && (
              <div className="text-red-500 text-center p-2 rounded bg-red-500/10">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-500 text-center p-2 rounded bg-green-500/10">
                {success}
              </div>
            )}

            {walletAddress && (
              <div className="text-center text-sm opacity-80">
                Connected: {walletAddress.substring(0, 6)}...
                {walletAddress.substring(walletAddress.length - 4)}
              </div>
            )}

            <ul className="space-y-2 px-[1em]">
              <li className="flex items-center gap-2">
                <span className="gradient-text">✔</span>
                <span>No emails or passwords required</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="gradient-text">✔</span>
                <span>Your wallet is your secure login</span>
              </li>
            </ul>

            {/* Username input */}
            <InputGroup
              type="text"
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              column
              className="rounded-[0.3em] border border-white/30 focus:border-white/50"
            />

            <div>
              {/* Metamask sign in */}
              <OutlineButton
                type="button"
                onClick={connectWallet}
                disabled={isConnecting || !!walletAddress}
                className="w-full px-[1em] uppercase"
              >
                {isConnecting ? (
                  "Connecting..."
                ) : (
                  <>
                    <MetamaskIcon classname="size-[1.8em]" />
                    {walletAddress ? "Wallet Connected" : "Connect Wallet"}
                  </>
                )}
              </OutlineButton>

              {/* Submit button */}
              <GradientButton
                type="submit"
                disabled={!username || !walletAddress || isRegistering}
                className="mt-[1em] w-full uppercase"
              >
                {isRegistering ? "Registering..." : "Sign Up"}
              </GradientButton>
            </div>

            {/* Sign up link */}
            <div className="text-center">
              <span>Have an account already?</span>&nbsp;
              <Link to="/sign-in" className="text-primary hover:opacity-90">
                Sign In
              </Link>
            </div>
          </FormSection>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;