import { Link, ScrollRestoration } from "react-router";

import GradientButton from "../components/ui/buttons/GradientButton";
import Footer from "../components/homepage/Footer";

import brickBg from "../assets/images/brick-bg.jpg";

const PrivacyPolicyPage = () => {
  return (
    <>
      <ScrollRestoration />
      <header className="homepage section-padding container mx-auto flex items-center justify-end bg-[#0A0A0A] py-[1em] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
        <Link to="/home">
          <GradientButton className="uppercase">Back to home</GradientButton>
        </Link>
      </header>
      <main
        className="homepage font-montserrat relative overflow-x-hidden bg-[#0A0A0A] bg-fixed text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]"
        style={{ backgroundImage: `url(${brickBg})` }}
      >
        {/* Black tint */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="section-padding relative container mx-auto py-10">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

          <section className="mb-6">
            <p>
              This policy outlines how Fluffy Tech Labs handles data for{" "}
              <strong>“Robotic Rabbits”</strong> players.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Data Collection</h2>
            <p>
              <strong>Personal:</strong> We collect names, emails, and
              blockchain wallet details for in-game activities.
            </p>
            <p>
              <strong>Non-Personal:</strong> Gameplay stats, device info, and
              technical data are gathered for service improvement.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Use of Data</h2>
            <p>
              We use your data to enhance game experience, provide support, and
              manage in-game transactions. Your privacy is our priority.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Data Sharing</h2>
            <p>
              Your data isn’t sold or used for external marketing. It’s only
              shared with necessary service providers under strict agreements.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Security</h2>
            <p>
              We protect your data with industry-standard safeguards against
              unauthorized access and misuse.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Children’s Privacy</h2>
            <p>We don’t knowingly collect data from children under 13.</p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              data with us.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Policy Updates</h2>
            <p>We may revise this policy and suggest regular reviews.</p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
            <p>
              Reach us for privacy questions at{" "}
              <a
                href="mailto:support@roboticrabbits.io"
                className="text-primary hover:underline"
              >
                support@roboticrabbits.io
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PrivacyPolicyPage;
