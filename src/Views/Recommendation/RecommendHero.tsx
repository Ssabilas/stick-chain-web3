// import Hero from "/assets/HeroSlider/hero-6.png";
// import { ParallaxImage } from "react-nice-scroll";
import RecommendHeroSliders from "../../Components/Slider/RecommendHeroSlider";

const RecommendHeros = () => {
  return (
    <>
      <section
        className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-center p-20 h-[100vh] -z-0 flex-col pt-32`}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-6xl font-bold">More Than A Games</h2>
          <p className="text-xl uppercase text-colorAqua">
            Life is too short to play badly
          </p>
        </div>
        <div className="w-[100vw] mt-12">
          <RecommendHeroSliders />
        </div>
      </section>
    </>
  );
};

export default RecommendHeros;
