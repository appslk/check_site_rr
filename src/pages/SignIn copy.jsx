import MetamaskIcon from "../components/ui/icons/MetamaskIcon";
import { useNavigate, Link } from "react-router";

import { IoStar } from "react-icons/io5";

import VideoSection from "../components/auth/VideoSection";
import FormSection from "../components/auth/FormSection";
import GradientButton from "../components/ui/buttons/GradientButton";

import brickBgWebp from "../assets/images/brick-bg.webp";
import brickBgJpg from "../assets/images/brick-bg.jpg";
import OutlineButton from "../components/ui/buttons/OutlineButton";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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

      {/* Leaklight */}
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
            title="Access the Syndicate"
            desc="Welcome back, Agent. Enter your credentials to rejoin the Robotic Rabbit Syndicate and unlock your digital domain."
          />

          {/* Sign up form */}
          <FormSection handleSubmit={handleSubmit}>
            {/* Title for small screens (md and below) */}
            <h2 className="text-center text-[2em] font-bold lg:hidden">
              Welcome Back
            </h2>

            <p className="text-center">
              To continue, please sign in with your MetaMask wallet.
            </p>

            <ul className="space-y-2 px-[1em]">
              <li className="flex items-center gap-2">
                <span className="gradient-text">✔</span>
                <span>No passwords required</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="gradient-text">✔</span>
                <span>No gas fees for login</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="gradient-text">✔</span>
                <span>Your data stays private</span>
              </li>
            </ul>

            <div className="my-[0.5em] flex items-center justify-between gap-[0.5em]">
              <hr className="grow border-t-white/30" />
              <p className="flex shrink-0 items-end gap-[0.2em] opacity-50">
                <IoStar className="text-[0.8em]" />
                <IoStar className="-translate-y-[0.1em]" />
                <IoStar className="text-[0.8em]" />
              </p>
              <hr className="grow border-t-white/30" />
            </div>

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
                Sign In
              </GradientButton>
            </div>

            {/* Sign up link */}
            <div className="text-center">
              <span>Don&apos;t have an account?</span>&nbsp;
              <Link to="/sign-up" className="text-primary hover:opacity-90">
                Sign Up
              </Link>
            </div>
          </FormSection>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
