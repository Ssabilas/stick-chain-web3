import GameCategories from "../../Components/Dropdown/GameCategory";
import FilterTags from "../../Components/Dropdown/FilterTag";
import FilterPrices from "../../Components/Dropdown/FilterPrice";
import CardList from "../../Json/Home/CardListView.json";
import { useState, useEffect, useRef, useCallback } from "react";
import { encryptData } from "../../Utils/parseURL";

const ExploreGames = () => {
  const searchBarRef = useRef<HTMLInputElement>(null);

  const [listItem, setListItem] = useState(true);
  const [categories, setCategories] = useState("");
  const [filteredCards, setFilteredCards] = useState(CardList); // Cards that are filtered

  const [stepOne, setStepOne] = useState(0);
  const [stepTwo, setStepTwo] = useState(6);

  const handleStep = (stepFirst: number, stepSec: number) => {
    setStepOne(stepFirst);
    setStepTwo(stepSec);
  };

  useEffect(() => {
    const filtered = CardList.filter((card) => {
      const matchesCategory =
        categories === "" ||
        card.category.toLowerCase().includes(categories.toLowerCase());
      return matchesCategory;
    });
    setFilteredCards(filtered);
  }, [categories]);

  const handleSearch = useCallback(() => {
    const query = searchBarRef.current?.value.toLowerCase() || "";
    const filtered = CardList.filter(
      (card) =>
        (card.name.toLowerCase().includes(query) ||
          card.category.toLowerCase().includes(query)) &&
        (categories === "" ||
          card.category.toLowerCase().includes(categories.toLowerCase()))
    );
    setFilteredCards(filtered);
  }, [categories]);

  // Update filteredCards whenever categories change or search input changes
  useEffect(() => {
    handleSearch(); // Perform the search whenever categories change
  }, [categories, handleSearch]);

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

  return (
    <>
      <section className="flex flex-row items-center justify-start w-full h-full">
        {/* Nav Component */}
        <div className="flex flex-col items-center justify-start w-[800px] h-[1300px]">
          <div className="flex flex-col items-center mb-12">
            <h3
              className="flex flex-row gap-12 mt-2 text-3xl font-semibold cursor-pointer rounded-xl "
              onClick={() => setListItem(!listItem)}
            >
              Game Category
              <i
                className={
                  listItem ? `ri-arrow-down-s-line` : `ri-arrow-up-s-line`
                }
              ></i>
            </h3>
            {listItem && (
              <GameCategories
                clickCategoryAll={() => {
                  setCategories("");
                  setStepOne(0);
                  setStepTwo(6);
                }}
                categoryAll="All Categories"
                totalItemAll={100}
                changeColorAll={categories === "" ? `bg-colorPurple` : ""}
                clickCategoryOne={() => {
                  setCategories("single-player");
                  setStepOne(0);
                  setStepTwo(6);
                }}
                categoryOne="Single Player"
                totalItemOne={18}
                changeColorOne={
                  categories === "single-player" ? `bg-colorPurple` : ""
                }
                clickCategoryTwo={() => {
                  setCategories("multi-player");
                  setStepOne(0);
                  setStepTwo(6);
                }}
                categoryTwo="Multi Player"
                totalItemTwo={30}
                changeColorTwo={
                  categories === "multi-player" ? `bg-colorPurple` : ""
                }
                clickCategoryThree={() => {
                  setCategories("rpg");
                  setStepOne(0);
                  setStepTwo(6);
                }}
                categoryThree="RPG"
                totalItemThree={19}
                changeColorThree={categories === "rpg" ? `bg-colorPurple` : ""}
                clickCategoryFour={() => {
                  setCategories("sandbox");
                  setStepOne(0);
                  setStepTwo(6);
                }}
                categoryFour="Sandbox"
                totalItemFour={18}
                changeColorFour={
                  categories === "sandbox" ? `bg-colorPurple` : ""
                }
                clickCategoryFive={() => {
                  setCategories("adventure");
                  setStepOne(0);
                  setStepTwo(6);
                }}
                categoryFive="Adventure"
                totalItemFive={30}
                changeColorFive={
                  categories === "adventure" ? `bg-colorPurple` : ""
                }
              />
            )}
          </div>
          <FilterTags />
          <FilterPrices />
        </div>
        {/* End Nav Component */}

        <div className="container flex flex-col self-start gap-2">
          {/* Title Most Popular */}
          <div className="flex flex-row items-center justify-start w-full h-12 gap-2 ml-2">
            <form
              className="bg-colorGrayDark/50 px-5 w-[60%] rounded-xl font-medium text-colorWhite text-base py-2 flex flex-row justify-center gap-4 items-center"
              onSubmit={(e) => {
                e?.preventDefault(); // Prevent form submission
                handleSearch();
              }}
            >
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
                onChange={handleSearch}
              />
              <span className="flex flex-row w-16 gap-1 px-1 mr-4 text-sm rounded-md cursor-default opacity-20">
                <span className="px-2 text-sm border rounded-md border-colorWhite">
                  Alt
                </span>
                +
                <span className="px-2 text-sm border rounded-md border-colorWhite">
                  /
                </span>
              </span>
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
                  stepTwo < filteredCards.length
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
          <div className="grid-cols-3 grid h-full w-[90%] justify-start items-start">
            {/* Card */}
            {filteredCards.slice(stepOne, stepTwo).map((content, index) => {
              const category = content?.category.split(" ");
              const contentId = content?.id?.replace(/ /g, "-").toLowerCase();
              const encryptParams = encryptData(encodeURI(contentId));

              return (
                <div
                  className="h-[480px] pt-4 cursor-pointer more-game-slide hover:opacity-70"
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
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
                    <h2 className="mt-6 ml-5 text-3xl font-bold cursor-pointer">
                      {content.name.length > 16
                        ? `${content.name.slice(0, 17)}...`
                        : content.name}
                    </h2>
                    <ul className="flex flex-row items-center justify-center gap-4 pt-1 pl-5 text-xl font-semibold">
                      <li className="flex flex-row gap-2 text-colorAqua">
                        <i className="ri-eth-fill"></i>
                        {content.price}
                      </li>
                    </ul>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreGames;
