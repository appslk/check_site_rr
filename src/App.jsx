import { createBrowserRouter, RouterProvider } from "react-router";

// Layouts
import DashboardLayout from "./layouts/Dashboard";

// Pages
import IndexPage from "./pages/Index";
import WelcomePage from "./pages/Welcome";
import HomePage from "./pages/Home";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsAndConditionsPage from "./pages/TermsAndConditions";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import InventoryPage from "./pages/Inventory";
import WorkshopPage from "./pages/Workshop";
import MintPage from "./pages/Mint";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    index: true,
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditionsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <InventoryPage /> },
      { path: "workshop", element: <WorkshopPage /> },
      { path: "mint", element: <MintPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
