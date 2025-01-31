import HeroSliders from "../../Components/Slider/HeroSlider";

const ExploreHeros = () => {
  return (
    <section
      className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-center h-[100vh]  flex-col`}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-6xl font-bold">Explore More</h2>
        <p className="text-xl uppercase text-colorAqua">
          Explore More Games That You Like
        </p>
      </div>
      <HeroSliders />
    </section>
  );
};

export default ExploreHeros;
