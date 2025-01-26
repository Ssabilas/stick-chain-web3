import CardList from "../../Json/Home/CardListView.json";
import GameCategories from "../../Components/Dropdown/GameCategory";
import FilterTags from "../../Components/Dropdown/FilterTag";
import FilterPrices from "../../Components/Dropdown/FilterPrice";
import { encryptData } from "../../Utils/parseURL";
import React, { MouseEventHandler, useState } from "react";

interface LiInterface {
  content: string;
  onClick: MouseEventHandler;
  changeColor: string;
}
const Li: React.FC<LiInterface> = ({ content, onClick, changeColor }) => {
  return (
    <li
      className={`px-8 py-2 rounded-full cursor-pointer hover:bg-colorPurple hover:text-colorWhite ${changeColor}`}
      onClick={onClick}
    >
      {content}
    </li>
  );
};

const ListPopularGameCards = () => {
  const [category, setCategory] = useState("");

  return (
    <>
      <section className="flex flex-row items-center justify-start w-full h-full">
        {/* Nav Component */}
        <div className="flex flex-col items-center justify-start w-[800px] h-[1300px]">
          <GameCategories />
          <FilterTags />
          <FilterPrices />
        </div>

        <div className="container flex flex-wrap self-center gap-2">
          <div className="h-32 flex flex-row justify-start gap-[10vw] w-full items-center">
            <ul className="flex flex-row items-center justify-center gap-4 px-5 py-2 ml-12 text-xl font-semibold rounded-full bg-gradient-to-b from-colorGrayDark/30 via-colorGrayDark/80 to-colorGrayDark/30 text-colorWhite">
              <Li
                content="All"
                changeColor={category === "" ? `bg-colorPurple` : ""}
                onClick={() => setCategory("")}
              />
              <Li
                content="Low Spec"
                changeColor={category === "lowSpec" ? `bg-colorPurple` : ""}
                onClick={() => setCategory("lowSpec")}
              />
              <Li
                content="Popular"
                changeColor={category === "popular" ? `bg-colorPurple` : ""}
                onClick={() => setCategory("popular")}
              />
              <Li
                content="Best Seller"
                changeColor={category === "bestSeller" ? `bg-colorPurple` : ""}
                onClick={() => setCategory("bestSeller")}
              />
            </ul>
            <button className="px-12 py-4 text-xl font-semibold rounded-full text-colorWhite bg-gradient-to-b from-colorGrayDark/30 via-colorGrayDark/80 to-colorGrayDark/30">
              Sort By <i className="ri-arrow-up-line"></i>
            </button>
          </div>
          <div className="flex flex-wrap">
            {/* Sorting Limited Index */}
            {CardList.filter(
              (card) => category === "" || card.type === category
            )
              .slice(0, 6)
              .map((content, index) => {
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

export default ListPopularGameCards;
