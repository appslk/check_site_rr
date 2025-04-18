import { useNavigate, Link } from "react-router";

import VideoSection from "../components/auth/VideoSection";
import FormSection from "../components/auth/FormSection";
import OutlineButton from "../components/ui/buttons/OutlineButton";
import MetamaskIcon from "../components/ui/icons/MetamaskIcon";
import InputGroup from "../components/ui/inputs/InputGroup";
import GradientButton from "../components/ui/buttons/GradientButton";

import brickBgWebp from "../assets/images/brick-bg.webp";
import brickBgJpg from "../assets/images/brick-bg.jpg";
import { ABI, contractAddress } from "../../contractABI";
import Web3 from "web3";

const SignUpPage = () => {
  const navigate = useNavigate();

    const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      setError("");

      if (!window.ethereum) {
        throw new Error("Please install MetaMask to connect your wallet");
      }

      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

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

  const handleSubmit2 = async (e) => {
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

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, contractAddress);
      const accounts = await web3.eth.getAccounts();

      // Call the register function from the smart contract
      await contract.methods.register(username).send({ from: accounts[0] });

      // Redirect to sign-in page after successful registration
      navigate("/sign-in");
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "Registration failed");
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
              column
              className="rounded-[0.3em] border border-white/30 focus:border-white/50"
            />

            <div>
              {/* Metamask sign in */}
              <OutlineButton
                type="button"
                className="w-full px-[1em] uppercase"
              >
                <MetamaskIcon classname="size-[1.8em]" />
                Connect Wallet
              </OutlineButton>

              {/* Submit button */}
              <GradientButton
                type="submit"
                className="mt-[1em] w-full uppercase"
              >
                Sign Up
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
