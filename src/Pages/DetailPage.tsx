import React from "react";

const ExploreGameSliders = React.lazy(
  () => import("../Components/Slider/ExploreGameSlider")
);

const GameDetails = React.lazy(() => import("../Views/Detail/GameDetail"));

const SpecDetails = React.lazy(() => import("../Views/Detail/SpecDetail"));

const GalleryDetails = React.lazy(
  () => import("../Views/Detail/GalleryDetail")
);

const DetailPages = () => {
  return (
    <>
      <GameDetails />
      <div className="flex items-center justify-center w-full gap-32">
        <div className="container flex">
          <SpecDetails />
          <GalleryDetails />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-32">
        <div className="container flex items-center justify-center gap-[49%]">
          <h2 className="pl-2 text-6xl font-bold">More Games</h2>
          <button
            className="text-2xl text-colorAqua hover:text-colorWhite"
            onClick={() => window.location.assign("/games/recommendation")}
          >
            Explore More <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <ExploreGameSliders Width={80} />
      </div>
    </>
  );
};

export default DetailPages;
