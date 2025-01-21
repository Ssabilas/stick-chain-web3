/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
// import Thumbnail from "/assets/CardList/Celeste-Card.png";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <i
      className="absolute bg-colorPurple py-12 rounded-r-xl justify-center items-center z-20 text-6xl top-[40%] cursor-pointer flex left-2  ri-arrow-left-s-line"
      onClick={onClick}
    ></i>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <i
      className="absolute bg-colorPurple py-12 rounded-l-xl right-2 z-20 text-6xl cursor-pointer flex top-[40%] ri-arrow-right-s-line"
      onClick={onClick}
    ></i>
  );
};

const MoreGameDetails = () => {
  const settings = {
    className: "w-[100vw] self-center center flex justify-center items-center",
    infinite: true,
    centerMode: true,
    dots: false,
    slidesToShow: 4,
    fade: false,
    slideToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    waitForAnimate: false,
  };
  return (
    <div className="mt-12 outline-none slider-container">
      <Slider {...settings}>
        <div className="px-2">
          <div className="flex w-full h-[480px] bg-[url('/assets/CardList/Celeste-Card.png')] bg-center bg-cover rounded-3xl">
            <div className="self-end w-full h-full px-5 bg-gradient-to-b from-colorWhite/0 to-colorPurple">
              <h2 className="flex self-end text-4xl font-bold pt-72">
                Lorem Ipsum
              </h2>
              <p className="font-semibold">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="flex w-full h-[480px] bg-[url('/assets/CardList/Celeste-Card.png')] bg-center bg-cover rounded-3xl">
            <div className="self-end w-full h-full px-5 bg-gradient-to-b from-colorWhite/0 to-colorPurple">
              <h2 className="flex self-end text-4xl font-bold pt-72">
                Lorem Ipsum
              </h2>
              <p className="font-semibold">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="flex w-full h-[480px] bg-[url('/assets/CardList/Celeste-Card.png')] bg-center bg-cover rounded-3xl">
            <div className="self-end w-full h-full px-5 bg-gradient-to-b from-colorWhite/0 to-colorPurple">
              <h2 className="flex self-end text-4xl font-bold pt-72">
                Lorem Ipsum
              </h2>
              <p className="font-semibold">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="flex w-full h-[480px] bg-[url('/assets/CardList/Celeste-Card.png')] bg-center bg-cover rounded-3xl">
            <div className="self-end w-full h-full px-5 bg-gradient-to-b from-colorWhite/0 to-colorPurple">
              <h2 className="flex self-end text-4xl font-bold pt-72">
                Lorem Ipsum
              </h2>
              <p className="font-semibold">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="px-2 rounded-xl">
          <div className="flex w-full h-[480px] bg-[url('/assets/CardList/Celeste-Card.png')] bg-center bg-cover rounded-3xl">
            <div className="self-end w-full h-full px-5 bg-gradient-to-b from-colorWhite/0 to-colorPurple">
              <h2 className="flex self-end text-4xl font-bold pt-72">
                Lorem Ipsum
              </h2>
              <p className="font-semibold">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MoreGameDetails;
