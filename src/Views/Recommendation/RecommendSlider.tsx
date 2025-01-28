import React from "react";
import Hero from "/assets/HeroSlider/hero-6.png";
import { ParallaxImage } from "react-nice-scroll";

const ExploreGameSliders = React.lazy(
  () => import("../../Components/Slider/ExploreGameSlider")
);

const RecommendSliders = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full -mt-[24vh]">
        <section className="w-[100%] flex justify-start items-center h-[80vh] flex-col">
          <div className="container flex flex-row items-center justify-center">
            <h2 className="pl-2 text-5xl font-bold">Trending This Year</h2>
            <hr className="w-[32vw] border-b-2 border-colorPurple" />
            <button
              className="px-5 py-2 text-xl font-semibold rounded-3xl text-colorWhite bg-colorGrayDark/30"
              onClick={() => window.location.assign("/explore")}
            >
              <div className="px-5 py-2 rounded-2xl bg-colorPurple hover:bg-colorGrayDark">
                Explore More Games <i className="ri-arrow-right-line"></i>
              </div>
            </button>
          </div>
          <div className="w-[95%]">
            <ExploreGameSliders Width={100} />
          </div>
        </section>
        <section className="w-[100%] flex justify-start items-center h-[80vh] flex-col">
          <div className="container flex flex-row items-center justify-center">
            <h2 className="pl-2 text-5xl font-bold">Most Downloaded</h2>
            <hr className="w-[32vw] border-b-2 border-colorPurple" />
            <button
              className="px-5 py-2 text-xl font-semibold rounded-3xl text-colorWhite bg-colorGrayDark/30"
              onClick={() => window.location.assign("/explore")}
            >
              <div className="px-5 py-2 rounded-2xl bg-colorPurple hover:bg-colorGrayDark">
                Explore More Games <i className="ri-arrow-right-line"></i>
              </div>
            </button>
          </div>
          <div className="w-[95%]">
            <ExploreGameSliders Width={100} />
          </div>
          <div className="w-[80vw] mr-[-16vw]">
            <ParallaxImage
              src={Hero}
              axis="x"
              containerHeight="30vh"
              imageObjectPosition="center"
              imageScale={1}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default RecommendSliders;
