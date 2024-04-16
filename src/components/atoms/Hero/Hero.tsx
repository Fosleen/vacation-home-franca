import { Slide } from "hero-slider";
import HeroSlider from "hero-slider/dist/HeroSlider";
import hero1 from "../../../assets/images/DJI_0039.jpg";
import hero2 from "../../../assets/images/DJI_0057.jpg";
import hero3 from "../../../assets/images/DJI_0060.jpg";
import hero4 from "../../../assets/images/DJI_0043.jpg";
import "hero-slider/dist/index.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="relative">
      <div className="absolute z-20 top-[50%] transform -translate-y-1/2 flex flex-col max-w-screen-xl mx-auto left-0 right-0 gap-0 items-center w-full lg:items-start px-8 xl:px-0">
        <p className="font-inspiration text-light-blue drop-shadow-lg text-5xl md:text-7xl text-center">
          odmori dušu uz rijeku
        </p>
        <h1 className="font-theBoldFont text-light-blue drop-shadow-lg text-8xl md:text-9xl">
          FRANCA
        </h1>
        <p className="font-inspiration text-light-blue drop-shadow-lg text-5xl mt-2 md:text-7xl md:mt-6">
          ~ kuća za odmor
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-10 w-full"></div>
      <HeroSlider
        height={`calc(100vh - ${isDesktop ? "98px" : "80px"})`}
        autoplay={{ autoplayDuration: 4000, autoplayDebounce: 0 }}
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 50,
        }}
      >
        <Slide
          background={{
            backgroundImageSrc: hero1,
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: hero2,
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: hero3,
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: hero4,
          }}
        />
      </HeroSlider>
    </div>
  );
};

export default Hero;
