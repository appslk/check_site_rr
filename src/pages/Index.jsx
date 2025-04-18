import { Link } from "react-router";
import GradientButton from "../components/ui/buttons/GradientButton";
import Footer from "../components/homepage/Footer";

import logoWebp from "../assets/images/indexpage/logo.webp";
import logoPng from "../assets/images/indexpage/logo.png";
import indexThumbnail from "../assets/images/indexpage/index-thumbnail.jpg";
import indexWebm from "../assets/images/indexpage/index.webm";
import indexMp4 from "../assets/images/indexpage/index.mp4";

const IndexPage = () => {
  return (
    <div className="relative h-dvh min-h-[37em] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
      <video
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
        loop
        muted
        playsInline
        poster={indexThumbnail}
        src={indexWebm}
        className="absolute inset-0 size-full object-cover"
      >
        <source src={indexMp4} type="video/mp4" />
      </video>

      <header className="absolute top-[7%] right-0 left-0 mx-auto w-fit">
        <picture>
          <source srcSet={logoWebp} />
          <img
            src={logoPng}
            alt="Logo"
            className="w-[150px] sm:w-[180px] md:w-[210px] lg:w-[260px] xl:w-[290px] 2xl:w-[320px]"
          />
        </picture>
      </header>

      <main className="absolute inset-0 m-auto size-fit">
        <Link to="/welcome">
          <GradientButton className="px-[3.5em] text-[1.2em] font-medium tracking-wide uppercase">
            Proceed
          </GradientButton>
        </Link>
      </main>

      <footer className="absolute bottom-0 w-full">
        <Footer className="bg-transparent" />
      </footer>
    </div>
  );
};

export default IndexPage;
