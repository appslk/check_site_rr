import { useState } from "react";
import { useNavigate } from "react-router";

import { VscUnmute, VscMute } from "react-icons/vsc";

import GradientButton from "../components/ui/buttons/GradientButton";

import welcomeThumbnail from "../assets/images/welcomepage/welcome-thumbnail.jpg";
import welcomeWebm from "../assets/images/welcomepage/welcome.webm";
import welcomeMp4 from "../assets/images/welcomepage/welcome.mp4";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => setIsMuted((prev) => !prev);
  const navigateUser = () => navigate("/home");

  return (
    <main className="relative h-dvh text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
      <video
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
        muted={isMuted}
        playsInline
        poster={welcomeThumbnail}
        src={welcomeWebm}
        onEnded={navigateUser}
        className="absolute inset-0 size-full object-cover"
      >
        <source src={welcomeMp4} type="video/mp4" />
      </video>

      <div className="section-padding relative container mx-auto flex justify-between pt-[50px]">
        <GradientButton
          className="px-[3.5em] text-[1.1em] tracking-wide uppercase"
          muted
          onClick={toggleSound}
        >
          {isMuted ? <VscMute /> : <VscUnmute />}
        </GradientButton>
        <GradientButton
          className="px-[3.5em] font-medium tracking-wide uppercase"
          muted
          onClick={navigateUser}
        >
          Skip
        </GradientButton>
      </div>
    </main>
  );
};

export default WelcomePage;
