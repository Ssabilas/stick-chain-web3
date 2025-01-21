import GalleryImg from "/assets/HeroSlider/Hero-1.png";

const GalleryDetails = () => {
  return (
    <>
      <div className="w-[40%] flex flex-col justify-start items-center">
        <button className="self-end pb-6 text-xl uppercase text-colorAqua">
          View Gallery <i className="ri-arrow-right-line"></i>
        </button>
        <div className="flex flex-row gap-12">
          <img
            src={GalleryImg}
            className="w-[280px] h-[280px] object-cover rounded-xl"
            alt="Gallery Image"
          />
          <div className="flex items-center justify-center cursor-pointer bg-colorBlack rounded-xl">
            <img
              src={GalleryImg}
              className="w-[280px] h-[280px] object-cover rounded-xl bg-colorWhite opacity-30"
              alt="Gallery Image"
            />
            <h2 className="absolute text-xl">5+ More Photos</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryDetails;
