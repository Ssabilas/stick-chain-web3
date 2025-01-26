import Slider from "react-slick";
import HeroOne from "/assets/HeroSlider/hero-1.png";
import HeroTwo from "/assets/HeroSlider/hero-2.png";
import HeroThree from "/assets/HeroSlider/hero-3.png";
import HeroFour from "/assets/HeroSlider/hero-4.png";
import HeroFive from "/assets/HeroSlider/hero-5.png";
import { memo } from "react";

const NextArrow = () => {
  // const { onClick } = props;
  return null;
  // <i
  //   className="absolute bg-colorWhite/10 rounded-r-full hover:bg-colorWhite/20 z-20 text-6xl top-[45%] cursor-pointer flex -right-16 ri-arrow-right-s-line"
  //   onClick={onClick}
  // ></i>
};

const PrevArrow = () => {
  return null;
  // <i
  //   className="absolute -left-16 z-20 text-6xl cursor-pointer flex top-[45%] ri-arrow-left-s-line"
  //   onClick={onClick}
  // ></i>
};

const RecommendHeroSliders = memo(() => {
  const settings = {
    dots: false,
    className: "outline-none",
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <div className="slider-container w-[100vw] h-[30vh] mt-12">
      <Slider {...settings}>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroOne}
            className="object-cover w-[900px] p-4 rounded-2xl -z-10 drop-shadow-md shadow-colorYellow"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroTwo}
            className="object-cover w-[900px] p-4 rounded-2xl -z-10"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroThree}
            className="object-cover w-[900px] p-4 rounded-2xl -z-10"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroFour}
            className="object-cover w-[900px] p-4 rounded-2xl -z-10"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroFive}
            className="object-cover w-[900px] p-4 rounded-2xl -z-10"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
});

export default RecommendHeroSliders;
