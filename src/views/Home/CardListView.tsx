/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import CardList from "../../Utility/CardListView.json";
import GameCategories from "../../components/Dropdown/GameCategory";
import FilterTags from "../../components/Dropdown/FilterTag";

const CardListViews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <section className="flex flex-row items-center justify-start w-full h-full">
        {/* Game Category Component */}
        <div className="flex flex-col items-center justify-start w-[800px] h-[1300px]">
          <GameCategories />
          <FilterTags />
        </div>

        <div className="container flex flex-wrap self-center gap-2">
          <div className="h-32 flex flex-row justify-start gap-[40%] w-full items-center">
            <h2 className="text-4xl font-bold">
              <span className="border-b-4 border-colorAqua">Most Popular</span>
              Games
            </h2>
            <button className="px-5 py-2 text-xl bg-colorGrayDark rounded-xl">
              Sort By <i className="ri-arrow-up-line"></i>
            </button>
          </div>
          <div className="flex flex-wrap">
            {CardList.slice(0, 5).map((content, index) => {
              const category = content.category.split(" ");
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
                      onClick={() => handleClick(index)}
                    >
                      {expandedIndex === index
                        ? content.name
                        : content.name.length > 16
                        ? `${content.name.slice(0, 17)}...`
                        : `${content.name}`}
                    </h2>
                    <p className="text-xl font-semibold text-colorAqua">
                      {content.price} ETH
                    </p>
                    <ul className="flex gap-4">
                      {category.map((item, categoryIndex) => (
                        <li
                          className="flex gap-1 font-semibold"
                          key={categoryIndex}
                        >
                          <i className="ri-coupon-3-line"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-[85%] px-4 py-2 my-8 hover:bg-colorAqua hover:text-colorViolet uppercase border-2 rounded-full border-colorAqua text-colorAqua outline-none">
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardListViews;
