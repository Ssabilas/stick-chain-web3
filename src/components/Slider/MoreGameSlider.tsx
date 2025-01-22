import { useRef } from "react";
import Image from "../../Json/Home/CardListView.json";
import { encryptData } from "../../Utils/parseURL";

const MoreGameSliders = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the next slide
  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 600; // Scroll to the right by 600px (same as slide width)
    }
  };

  // Function to scroll to the previous slide
  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 600; // Scroll to the left by 600px (same as slide width)
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
      <div className="more-game-container" ref={containerRef}>
        <div className="more-game-slider">
          {Image.map((content, index) => {
            const gameCategory = content.category.split(" ");
            const contentID = content.id.replace(/ /g, "-").toLowerCase();
            const encryptParams = encryptData(contentID);

            return (
              <>
                <div
                  className="cursor-pointer more-game-slide"
                  key={index}
                  onClick={() => {
                    window.location.assign(
                      `/games/${encodeURIComponent(encryptParams)}`
                    );
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
                    <p className="flex flex-row gap-2 pt-2 pl-5 text-xl font-semibold text-colorAqua">
                      <i className="ri-eth-fill"></i>
                      {content.price}
                    </p>
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

export default MoreGameSliders;
