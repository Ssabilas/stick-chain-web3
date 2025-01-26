/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import HeroOne from "/assets/HeroSlider/hero-1.png";
import HeroTwo from "/assets/HeroSlider/hero-2.png";
import HeroThree from "/assets/HeroSlider/hero-3.png";
import HeroFour from "/assets/HeroSlider/hero-4.png";
import HeroFive from "/assets/HeroSlider/hero-5.png";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <i
      className="absolute -right-[5rem] z-20 text-[4rem] bg-colorPurple translate-x-2 cursor-pointer flex h-[30%] justify-center items-center top-[45%] ri-arrow-right-s-line rounded-full text-colorWhite hover:bg-colorWhite/5"
      onClick={onClick}
    ></i>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <i
      className="absolute -left-[5rem] z-20 text-[4rem] cursor-pointer flex h-[30%] justify-center items-center top-[45%] ri-arrow-left-s-line text-colorWhite bg-colorPurple  hover:bg-colorWhite/5 rounded-[3rem]"
      onClick={onClick}
    ></i>
  );
};

const HomeHeroSliders = () => {
  const settings = {
    className: "w-[70vw] pt-32 flex justify-center items-center",
    infinite: true,
    centerMode: true,
    dots: true,
    slidesToShow: 1,
    fade: false,
    slideToScroll: 1.4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssLinear: "linear",
  };
  return (
    <div className="flex items-center justify-center slider-container">
      <Slider {...settings}>
        <div className="flex items-center justify-center w-full">
          <img
            src={HeroOne}
            className="object-cover w-[65vw] p-4 -z-10 drop-shadow-md"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroTwo}
            className="object-cover w-[65vw] p-4 -z-10 drop-shadow-md"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroThree}
            className="object-cover w-[65vw] p-4 -z-10 drop-shadow-md"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroFour}
            className="object-cover w-[65vw] p-4 -z-10 drop-shadow-md"
            alt=""
          />
        </div>
        <div className="self-center justify-center w-full m-auto ">
          <img
            src={HeroFive}
            className="object-cover w-[65vw] p-4 -z-10 drop-shadow-md"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeHeroSliders;
