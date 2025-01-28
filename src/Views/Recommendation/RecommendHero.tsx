import Hero from "/assets/HeroSlider/hero-6.png";
import { ParallaxImage } from "react-nice-scroll";
import React from "react";

const RecommendHeroSliders = React.lazy(
  () => import("../../Components/Slider/RecommendHeroSlider")
);

const RecommendHeros = () => {
  return (
    <>
      <section
        className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-center p-20 h-[150vh] -z-0 flex-col pt-32`}
      >
        <div className="w-[80vw] -mt-[40vh] -ml-[20vw]">
          <ParallaxImage
            src={Hero}
            axis="x"
            fromPercent={-60}
            containerHeight="30vh"
            imageObjectPosition="center"
            imageScale={1}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-12">
          <h2 className="text-6xl font-bold">More Than A Games</h2>
          <p className="text-xl uppercase text-colorAqua">
            Life is too short to play badly
          </p>
        </div>
        <div className="w-[100vw] mt-12">
          <RecommendHeroSliders />
        </div>
      </section>
    </>
  );
};

export default RecommendHeros;
