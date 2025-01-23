// import { useState } from "react";
import GameCategories from "../../Components/Dropdown/GameCategory";
import FilterTags from "../../Components/Dropdown/FilterTag";
import FilterPrices from "../../Components/Dropdown/FilterPrice";
import CardList from "../../Json/Home/CardListView.json";
import { useState } from "react";
import { encryptData } from "../../Utils/parseURL";
import { useEffect, useRef } from "react";

const ExploreGames = () => {
  const searchBarRef = useRef<HTMLInputElement>(null);

  // Handle Searchbar Keydown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "/") {
        searchBarRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [stepOne, setStepOne] = useState(0);
  const [stepTwo, setStepTwo] = useState(6);

  function handleStep(stepFirst: number, stepSec: number) {
    setStepOne(stepFirst);
    setStepTwo(stepSec);
  }

  return (
    <>
      <section className="flex flex-row items-center justify-start w-full h-full">
        {/* Nav Component */}
        <div className="flex flex-col items-center self-start justify-start w-[800px] h-[100%] -mt-40">
          <GameCategories />
          <FilterTags />
          <FilterPrices />
        </div>

        <div className="container flex flex-col self-start gap-2">
          {/* Title Most Popular */}
          <div className="flex flex-row items-center justify-start w-full h-12 gap-2 ml-2">
            <form className="bg-colorGrayDark/50 px-5 w-[60%] rounded-xl font-medium text-colorWhite text-base py-2 flex flex-row justify-center gap-4 items-center">
              <label htmlFor="exploreSearch">
                <i className="font-medium ri-search-line text-colorWhiteDark"></i>
              </label>
              <input
                id="exploreSearch"
                name="exploreSearch"
                type="text"
                className="self-center w-full bg-transparent outline-none placeholder:font-medium"
                placeholder="Search by name"
                ref={searchBarRef}
              />
              {/* Toggle Search UI */}
              <span className="flex flex-row w-16 gap-1 px-1 mr-4 text-sm rounded-md cursor-default opacity-20">
                <span className="px-2 text-sm border rounded-md border-colorWhite">
                  Alt
                </span>
                +
                <span className="px-2 text-sm border rounded-md border-colorWhite">
                  /
                </span>
              </span>
              {/* End Toggle Search UI */}
            </form>
            <div className="flex flex-row items-center justify-center font-medium">
              <button className="px-5 py-2 text-xl bg-colorPurple rounded-xl">
                Price to Low <i className="ri-arrow-down-s-line"></i>
              </button>
              <button
                className="w-20 px-5 py-2 ml-2 text-xl bg-colorPurple rounded-l-xl hover:bg-colorPurple/80"
                onClick={() =>
                  stepOne < 6 ? null : handleStep(stepOne - 6, stepTwo - 6)
                }
              >
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button
                className="w-20 px-5 py-2 text-xl bg-colorPurple rounded-r-xl hover:bg-colorPurple/80"
                onClick={() =>
                  stepTwo < CardList.length
                    ? handleStep(stepOne + 6, stepTwo + 6)
                    : null
                }
              >
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
          {/* End Title Most Popular */}
          {/* Card Wrapper */}
          <div className="flex flex-wrap h-full w-[90%]">
            {/* Card */}
            {CardList.slice(stepOne, stepTwo).map((content, index) => {
              const category = content.category.split(" ");
              const contentId = content.id.replace(/ /g, "-").toLowerCase();
              const encryptParams = encryptData(encodeURIComponent(contentId));

              return (
                <div
                  className="pt-4 cursor-pointer more-game-slide hover:opacity-70 animate"
                  key={index}
                  onClick={() =>
                    window.location.assign(`/games/${encryptParams}`)
                  }
                >
                  <img
                    src={content.thumbnail}
                    alt="Image Thumbnail"
                    className="h-[480px] w-[380px] object-cover rounded-3xl opacity-75"
                  />
                  <div className="z-[10] mx-2 h-[200px] w-[380px] flex justify-start items-start bg-gradient-to-b from-colorWhite/0 to-colorPurple -mt-[12rem] flex-col rounded-b-xl">
                    {/* Title Text */}
                    <h2 className="pt-6 pl-4 text-3xl font-bold drop-shadow-md">
                      {content.name}
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
                      {category.slice(0, 2).map((content, index) => (
                        <li className="flex gap-1" key={index}>
                          <i className="ri-gamepad-fill"></i> {content}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
            {/* End Card */}
          </div>
          {/* End Card Wrapper */}
        </div>
      </section>
    </>
  );
};

export default ExploreGames;
