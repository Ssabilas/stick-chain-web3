import { useRef } from "react";
import Image from "../../Json/Home/CardListView.json";
import { encryptData } from "../../Utils/parseURL";

interface ExploreGameInterface {
  Width: number;
}

const ExploreGameSliders = ({ Width }: ExploreGameInterface) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 600;

      // Terapkan animasi dengan reset agar bisa diputar kembali
      containerRef.current.style.animation = "none";
      setTimeout(() => {
        containerRef.current!.style.animation =
          "slide-in 0.5s ease-in-out forwards";
      }, 0);
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 600;

      // Terapkan animasi dengan reset agar bisa diputar kembali
      containerRef.current.style.animation = "none";
      setTimeout(() => {
        containerRef.current!.style.animation =
          "slide-out 0.8s ease-in-out forwards";
      }, 0);
    }
  };

  return (
    <section className="flex items-center justify-center h-[60vh]">
      <button
        onClick={handlePrev}
        className="px-4 py-12 text-4xl font-bold text-white bg-gray-800 bg-colorPurple rounded-xl"
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <div
        className={`more-game-container max-w-[${Width}vw]`}
        ref={containerRef}
      >
        <div className="more-game-slider">
          {Image.map((content, index) => {
            const gameCategory = content.category.split(" ");
            const contentID = content.id.replace(/ /g, "-").toLowerCase();
            const encryptParams = encryptData(encodeURI(contentID));

            return (
              <>
                <div
                  className="cursor-pointer more-game-slide hover:opacity-70 "
                  key={index}
                  onClick={() => {
                    window.location.assign(`/games/${encryptParams}`);
                  }}
                >
                  <img
                    src={content.thumbnail}
                    alt="Image Thumbnail"
                    className="h-[480px] w-[380px] object-cover rounded-3xl opacity-75"
                  />
                  <div className="z-[10] mx-2 h-[200px] w-[380px] flex justify-start items-start bg-gradient-to-b from-colorWhite/0 to-colorPurple -mt-[12rem] flex-col rounded-b-xl">
                    {/* Title Text */}
                    <h2 className="pt-6 pl-4 text-3xl font-bold drop-shadow-md">
                      {content.name.length > 16
                        ? `${content.name.slice(0, 17)}...`
                        : content.name}
                    </h2>
                    {/* ETH Text */}
                    <ul className="flex flex-row items-center justify-center gap-4 pt-2 pl-5 text-xl font-semibold">
                      <li className="flex flex-row gap-2 text-colorAqua">
                        <i className="ri-eth-fill"></i>
                        {content.price}
                      </li>
                      <li>
                        <i className="ri-star-fill text-colorYellow"></i>{" "}
                        {content.rate}
                      </li>
                    </ul>
                    {/* Category Text */}
                    <ul className="flex flex-row gap-4 pt-2 pl-6 font-semibold">
                      {gameCategory.slice(0, 2).map((category, index) => (
                        <li className="flex gap-1" key={index}>
                          <i className="ri-gamepad-fill"></i>{" "}
                          {category.replace(/-/g, " ")}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="px-4 py-12 text-4xl font-bold text-white bg-gray-800 bg-colorPurple rounded-xl"
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </section>
  );
};

export default ExploreGameSliders;
