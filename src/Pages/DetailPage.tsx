import GameDetails from "../Views/Detail/GameDetail";
import SpecDetails from "../Views/Detail/SpecDetail";
import GalleryDetails from "../Views/Detail/GalleryDetail";
// import MoreGameDetails from "../components/Slider/MoreGameDetail";
import MoreGameSliders from "../Components/Slider/MoreGameSlider";

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
          <button className="text-xl text-colorAqua">
            View Collection <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <MoreGameSliders />
      </div>
    </>
  );
};

export default DetailPages;
