// import GradientMest from "/assets/Hero-Gradient.png";
import HomeHeroSliders from "../../Components/Slider/HomeHeroSlider";

const HomeHeros = () => {
  return (
    <>
      <section
        className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-start p-20 h-[80vh] -z-0`}
      >
        <HomeHeroSliders />
      </section>
    </>
  );
};

export default HomeHeros;
