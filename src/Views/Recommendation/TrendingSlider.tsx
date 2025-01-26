import ExploreGameSliders from "../../Components/Slider/ExploreGameSlider";

const TrendingSliders = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full">
        <section className="w-[100%] flex justify-start items-center h-[80vh] flex-col">
          <div className="container flex items-center justify-center gap-[49%] flex-row">
            <h2 className="pl-2 text-5xl font-bold w-[80%]">
              Trending This Year
            </h2>
            <button
              className="text-xl text-colorAqua w-[50%] hover:text-colorWhite"
              onClick={() => window.location.assign("/explore")}
            >
              View Collection <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="w-[95%]">
            <ExploreGameSliders Width={100} />
          </div>
        </section>
        <section className="w-[100%] flex justify-start items-center h-[80vh] flex-col">
          <div className="container flex items-center justify-center gap-[49%] flex-row">
            <h2 className="pl-2 text-5xl font-bold w-[80%]">Most Downloaded</h2>
            <button
              className="text-xl text-colorAqua w-[50%] hover:text-colorWhi"
              onClick={() => window.location.assign("/explore")}
            >
              View Collection <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="w-[95%]">
            <ExploreGameSliders Width={100} />
          </div>
        </section>
      </section>
    </>
  );
};

export default TrendingSliders;
