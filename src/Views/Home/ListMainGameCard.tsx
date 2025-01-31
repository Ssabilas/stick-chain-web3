import CardList from "../../Json/Home/CardListView.json";
import GameCategories from "../../Components/Dropdown/GameCategory";
import FilterTags from "../../Components/Dropdown/FilterTag";
import FilterPrices from "../../Components/Dropdown/FilterPrice";
import { encryptData } from "../../Utils/parseURL";
import React, { MouseEventHandler, useState, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/cartSlice";
import EwalletCards from "../../Components/MetaMask/EwalletCard";
import { useAccount } from "wagmi";

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

const ListMainGameCards = () => {
  const [category, setCategory] = useState("");
  const [listItem, setListItem] = useState(true);
  const [categories, setCategories] = useState("");
  const [filterTags, setFilterTags] = useState("");
  const [filterPriceFrom, setFilterPriceFrom] = useState<number | null>(null);
  const [filterPriceTo, setFilterPriceTo] = useState<number | null>(null);
  const [card, setCard] = useState<boolean>(false);
  const { isConnected } = useAccount();

  const dispatch = useDispatch();

  const addItem = (item: string) => {
    const normalizedId = item.replace(/ /g, "-").toLowerCase();
    dispatch(addToCart(normalizedId));
  };

  // Filter CardView berdasarkan item yang ada di cartItems
  const filteredCards = useMemo(() => {
    return CardList.filter((card) => {
      // Filter berdasarkan kategori utama
      const isCategoryMatch = category === "" || card.type === category;

      // Filter berdasarkan sub-kategori (categories)
      const isCategoriesMatch =
        categories === "" ||
        card.category
          .toLowerCase()
          .split(" ")
          .includes(categories.toLowerCase());

      // Filter berdasarkan rentang harga dari pengguna
      const isCustomPriceMatch =
        (filterPriceFrom === null || card.price >= filterPriceFrom) &&
        (filterPriceTo === null || card.price <= filterPriceTo);

      // Filter berdasarkan tag harga (lowPrice, normalPrice, highPrice)
      const isPriceMatch =
        filterTags === "lowPrice"
          ? card.price <= 0.008
          : filterTags === "normalPrice"
          ? card.price >= 0.005 && card.price <= 0.008
          : filterTags === "highPrice"
          ? card.price >= 0.008
          : true;

      return (
        isCategoryMatch &&
        isCategoriesMatch &&
        isCustomPriceMatch &&
        isPriceMatch
      );
    }).slice(0, 6);
  }, [category, categories, filterTags, filterPriceFrom, filterPriceTo]);

  const containerRef = useRef<HTMLDivElement>(null);
  const handleSlide = () => {
    if (!containerRef.current) return;

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
      {card && <EwalletCards />}
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
          <FilterTags
            clickCategoryNone={() => {
              setFilterTags("");
              handleSlide();
            }}
            categoryNone="None"
            changeColorNone={filterTags === "" ? `bg-colorPurple` : ""}
            clickCategoryLowPrice={() => {
              setFilterTags("lowPrice");
              handleSlide();
            }}
            categoryLowPrice="Low Price"
            changeColorLowPrice={
              filterTags === "lowPrice" ? `bg-colorPurple` : ""
            }
            clickCategoryNormalPrice={() => {
              setFilterTags("normalPrice");
              handleSlide();
            }}
            categoryNormalPrice="Normal Price"
            changeColorNormalPrice={
              filterTags === "normalPrice" ? `bg-colorPurple` : ""
            }
            clickCategoryHighPrice={() => {
              setFilterTags("highPrice");
              handleSlide();
            }}
            categoryHighPrice="High Price"
            changeColorHighPrice={
              filterTags === "highPrice" ? `bg-colorPurple` : ""
            }
          />
          <FilterPrices
            inputPlaceHolderFrom="From"
            inputValueFrom={filterPriceFrom}
            setInputValueFrom={setFilterPriceFrom}
            inputPlaceHolderTo="To"
            inputValueTo={filterPriceTo}
            setInputValueTo={setFilterPriceTo}
          />
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
            className="grid-cols-3 grid h-[100vh] w-[88%] justify-start items-start"
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
                    {isConnected ? (
                      <button
                        className="w-[85%] px-4 py-2 uppercase border-2 rounded-full outline-none  hover:bg-colorAqua hover:text-colorViolet border-colorAqua text-colorAqua"
                        onClick={() => {
                          addItem(contentID);
                        }}
                      >
                        Add to cart <i className="ri-shopping-cart-2-fill"></i>
                      </button>
                    ) : (
                      <button
                        className="w-[85%] px-4 py-2 uppercase border-2 rounded-full outline-none  hover:bg-colorAqua hover:text-colorViolet border-colorAqua text-colorAqua"
                        onClick={() => setCard(!card)}
                      >
                        Add to cart <i className="ri-shopping-cart-2-fill"></i>
                      </button>
                    )}
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
