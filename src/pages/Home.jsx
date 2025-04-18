import { Link, ScrollRestoration } from "react-router";

import brickBg from "../assets/images/brick-bg.jpg";

import ScollToTop from "../components/homepage/ScrollToTop";
import GradientButton from "../components/ui/buttons/GradientButton";
import Hero from "../components/homepage/Hero";
import Mint from "../components/homepage/Mint";
import Workshop from "../components/homepage/Workshop";
import Collections from "../components/homepage/Collections";
import Roadmap from "../components/homepage/Roadmap";
import Team from "../components/homepage/Team";
import FAQ from "../components/homepage/FAQ";
import Footer from "../components/homepage/Footer";
import Music from "../components/homepage/Music";

const HomePage = () => {
  return (
    <>
      <Music />

      <ScrollRestoration />

      {/* ScollToTop */}
      <ScollToTop />

      <header className="homepage section-padding container mx-auto flex items-center justify-end bg-[#0A0A0A] py-[1em] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
        <Link to="/sign-in">
          <GradientButton className="uppercase">Dashboard</GradientButton>
        </Link>
      </header>

      <main
        className="homepage font-montserrat overflow-x-hidden bg-[#0A0A0A] bg-fixed text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]"
        style={{ backgroundImage: `url(${brickBg})` }}
      >
        <Hero />
        <Mint />
        <Workshop />
        <Collections />
        <Roadmap />
        <Team />
        <FAQ />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
