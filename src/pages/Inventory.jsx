import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Web3 from "web3";
import { ABI, contractAddress } from "../../contractABI"; // Adjust path as needed

const InventoryPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is registered when component mounts
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = async () => {
    try {
      setIsLoading(true);
      
      if (!window.ethereum) {
        // No MetaMask installed, redirect to sign in
        navigate("/sign-in");
        return;
      }

      // Get current account
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      
      if (!accounts || accounts.length === 0) {
        // No connected account, redirect to sign in
        navigate("/sign-in");
        return;
      }

      // Check if user is registered in the contract
      const contract = new web3.eth.Contract(ABI, contractAddress);
      const user = await contract.methods.getUser(accounts[0]).call();
      
      // Check if user exists and is registered (third value in the returned array)
      if (user && user[2]) {
        setIsAuthenticated(true);
      } else {
        // User not registered, redirect to sign in
        navigate("/sign-in");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      // On error, redirect to sign in for safety
      navigate("/sign-in");
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-2xl font-bold text-primary">Loading...</div>
          <div className="text-white/70">Verifying your credentials</div>
        </div>
      </div>
    );
  }

  // Only render the iframe if authenticated
  return isAuthenticated ? (
    <div className="h-full w-full">
      <iframe
        src="https://d2mlmfod4h1sc4.cloudfront.net/"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Dashboard"
      ></iframe>
    </div>
  ) : null; // This null should never render because of the redirect
};

export default InventoryPage;