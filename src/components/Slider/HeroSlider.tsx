/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import HeroOne from "/assets/HeroSlider/Hero-1.png";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <i
      className="absolute z-20 text-6xl top-[45%] cursor-pointer flex -right-16 ri-arrow-right-s-line"
      onClick={onClick}
    ></i>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <i
      className="absolute -left-16 z-20 text-6xl cursor-pointer flex top-[45%] ri-arrow-left-s-line"
      onClick={onClick}
    ></i>
  );
};

const HeroSliders = () => {
  const settings = {
    className: "w-[1500px] center flex justify-center items-center pt-20",
    infinite: true,
    centerMode: true,
    dots: true,
    slidesToShow: 1,
    fade: false,
    slideToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    waitFor: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={HeroOne} className="p-4 -z-10 w-full" alt="" />
        </div>
        <div>
          <img src={HeroOne} className="p-4 -z-10 w-full" alt="" />
        </div>
        <div>
          <img src={HeroOne} className="p-4 -z-10 w-full" alt="" />
        </div>
        <div>
          <img src={HeroOne} className="p-4 -z-10 w-full" alt="" />
        </div>
        <div>
          <img src={HeroOne} className="p-4 -z-10 w-full" alt="" />
        </div>
        <div>
          <img src={HeroOne} className="p-4 -z-10 w-full" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSliders;
