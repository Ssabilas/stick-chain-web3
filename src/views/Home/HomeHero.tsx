import { ReactElement } from "react";
// import GradientMest from "/assets/Hero-Gradient.png";
import HeroSliders from "../../components/Slider/HeroSlider";

const HomeHeros = (): ReactElement => {
  return (
    <>
      <section
        className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-start p-20 h-[80vh] -z-0`}
      >
        <HeroSliders />
      </section>
    </>
  );
};

export default HomeHeros;
