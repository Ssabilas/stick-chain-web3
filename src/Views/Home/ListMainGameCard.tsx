import CardList from "../../Json/Home/CardListView.json";
import GameCategories from "../../Components/Dropdown/GameCategory";
import FilterTags from "../../Components/Dropdown/FilterTag";
import FilterPrices from "../../Components/Dropdown/FilterPrice";
import { encryptData } from "../../Utils/parseURL";
import React, { MouseEventHandler, useState, useMemo, useRef } from "react";
import Hero from "/assets/HeroSlider/hero-6.png";
import { ParallaxImage } from "react-nice-scroll";

interface LiInterface {
  content: string;
  onClick: MouseEventHandler;
  changeColor: string;
}
const Li: React.FC<LiInterface> = React.memo(
  ({ content, onClick, changeColor }) => {
    return (
      <li
        className={`px-8 py-2 rounded-full cursor-pointer hover:bg-colorGrayDark hover:text-colorWhite ${changeColor}`}
        onClick={onClick}
      >
        {content}
      </li>
    );
  }
);

// const saveToLocalStorage = (data) => {
//   localStorage.setItem("ID", data.id);
//   localStorage.setItem("Name", data.name);
//   localStorage.setItem("Thumbnail", data.thumbnail);
//   localStorage.setItem("Rate", data.rate);
//   localStorage.setItem("Price", data.price);
// };

const ListMainGameCards = () => {
  const [category, setCategory] = useState("");
  const [listItem, setListItem] = useState(true);
  const [categories, setCategories] = useState("");

  const filteredCards = useMemo(() => {
    return CardList.filter(
      (card) =>
        (category === "" && categories === "") ||
        (category === "" &&
          card.category
            .toLowerCase()
            .split(" ")
            .includes(categories.toLowerCase())) ||
        (card.type === category && categories === "") ||
        (card.type === category &&
          card.category
            .toLowerCase()
            .split(" ")
            .includes(categories.toLowerCase()))
    ).slice(0, 6);
  }, [category, categories]);

  const containerRef = useRef<HTMLDivElement>(null);
  const handleSlide = () => {
    if (!containerRef.current) return; // Check if ref is valid

    containerRef.current.style.animation = "none";

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.animation =
          "slide-out 0.5s ease-in-out forwards";
      }
    }, 0);
  };

  return (
    <>
      <section className="flex flex-row items-center justify-start w-full h-full">
        {/* Nav Component */}
        <div className="flex flex-col items-center justify-start w-[800px] h-[1300px]">
          <div className="flex flex-col items-center mt-40 mb-12">
            <h3
              className="flex flex-row gap-12 text-3xl font-semibold cursor-pointer"
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
                  handleSlide();
                }}
                categoryAll="All Categories"
                totalItemAll={100}
                changeColorAll={categories === "" ? `bg-colorPurple` : ""}
                clickCategoryOne={() => {
                  setCategories("single-player");
                  handleSlide();
                }}
                categoryOne="Single Player"
                totalItemOne={18}
                changeColorOne={
                  categories === "single-player" ? `bg-colorPurple` : ""
                }
                clickCategoryTwo={() => {
                  setCategories("multi-player");
                  handleSlide();
                }}
                categoryTwo="Multi Player"
                totalItemTwo={30}
                changeColorTwo={
                  categories === "multi-player" ? `bg-colorPurple` : ""
                }
                clickCategoryThree={() => {
                  setCategories("rpg");
                  handleSlide();
                }}
                categoryThree="RPG"
                totalItemThree={19}
                changeColorThree={categories === "rpg" ? `bg-colorPurple` : ""}
                clickCategoryFour={() => {
                  setCategories("sandbox");
                  handleSlide();
                }}
                categoryFour="Sandbox"
                totalItemFour={18}
                changeColorFour={
                  categories === "sandbox" ? `bg-colorPurple` : ""
                }
                clickCategoryFive={() => {
                  setCategories("adventure");
                  handleSlide();
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
          <div className="w-[40vw]  -mr-[8vw]">
            <ParallaxImage
              src={Hero}
              axis="y"
              fromPercent={-40}
              toPercent={80}
              containerHeight="180vh"
              imageObjectPosition="center"
              imageScale={0.4}
            />
          </div>
        </div>
        {/* End Nav Component */}

        <div className="container flex flex-wrap self-center gap-2">
          <div className="flex flex-row items-center justify-start w-full h-32">
            <ul className="flex flex-row items-center justify-center gap-4 px-5 py-2 ml-12 text-xl font-semibold rounded-3xl bg-colorGrayDark/30 text-colorWhite">
              <Li
                content="All"
                changeColor={category === "" ? `bg-colorPurple` : ""}
                onClick={() => {
                  setCategory("");
                  setCategories(""); // Set keduanya kosong untuk menampilkan semua
                  handleSlide();
                }}
              />
              <Li
                content="Low Spec"
                changeColor={category === "lowSpec" ? `bg-colorPurple` : ""}
                onClick={() => {
                  setCategory("lowSpec");
                  setCategories(""); // Pastikan categories kosong
                  handleSlide();
                }}
              />
              <Li
                content="Popular"
                changeColor={category === "popular" ? `bg-colorPurple` : ""}
                onClick={() => {
                  setCategory("popular");
                  setCategories("");
                  handleSlide();
                }}
              />
              <Li
                content="Best Seller"
                changeColor={category === "bestSeller" ? `bg-colorPurple` : ""}
                onClick={() => {
                  setCategory("bestSeller");
                  setCategories("");
                  handleSlide();
                }}
              />
            </ul>
            <hr className="w-[6vw] border-b-2 border-colorPurple" />
            <button
              className="px-5 py-2 text-xl font-semibold rounded-3xl text-colorWhite bg-colorGrayDark/30"
              onClick={() => window.location.assign("/explore")}
            >
              <div className="px-5 py-2 rounded-2xl bg-colorPurple hover:bg-colorGrayDark">
                Explore More Games <i className="ri-arrow-right-line"></i>
              </div>
            </button>
          </div>
          <div
            className="grid-cols-3 grid h-[100vh] w-[90%] justify-start items-start"
            ref={containerRef}
          >
            {/* Sorting Limited Index */}

            {filteredCards.map((content, index) => {
              const category = content.category.split(" ");
              const contentID = content.id.replace(/ /g, "-").toLowerCase();
              const encryptParams = encryptData(encodeURI(contentID));

              return (
                <div
                  className="bg-colorPurple w-[350px] flex justify-center text-start items-center flex-col rounded-xl m-4 mt-8"
                  key={index}
                >
                  <img
                    src={content.thumbnail}
                    alt="Hero Thumbnail"
                    className="w-[300px] h-[250px] object-cover -mt-8 rounded-2xl"
                  />
                  <div className="self-start px-8 py-4">
                    <h2
                      className="text-2xl font-bold cursor-pointer"
                      onClick={() =>
                        window.location.assign(`/games/${encryptParams}`)
                      }
                    >
                      {/* Limit Character Games Card Title */}
                      {content.name.length > 16
                        ? `${content.name.slice(0, 17)}...`
                        : `${content.name}`}
                    </h2>
                    <p className="text-xl font-semibold text-colorAqua">
                      {content.price} ETH
                    </p>
                    <ul className="flex flex-wrap pt-1 text-sm uppercase">
                      {category.slice(0, 2).map((item, categoryIndex) => (
                        <li
                          className="flex gap-1 px-1 font-semibold"
                          key={categoryIndex}
                        >
                          <i className="ri-gamepad-line"></i>
                          {item.replace(/-/g, " ")}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-4 my-8">
                    <button className="w-[85%] px-4 py-2 uppercase border-2 rounded-full outline-none  hover:bg-colorAqua hover:text-colorViolet border-colorAqua text-colorAqua">
                      Add to cart <i className="ri-shopping-cart-2-fill"></i>
                    </button>
                    <button
                      className="w-[85%] px-4 py-2 bg-transparent hover:bg-colorWhite hover:text-colorViolet border-colorWhite uppercase border-2 rounded-full hover:border-colorWhite bg-colorPurple text-colorWhite outline-none"
                      onClick={() =>
                        window.location.assign(`/games/${encryptParams}`)
                      }
                    >
                      Read More <i className="ri-arrow-right-line"></i>
                    </button>
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

export default ListMainGameCards;
