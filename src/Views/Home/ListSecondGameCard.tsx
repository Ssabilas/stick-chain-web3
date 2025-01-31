import CardList from "../../Json/Home/CardListView.json";
import { encryptData } from "../../Utils/parseURL";

const ListSecondGameCards = () => {
  return (
    <>
      <section className="flex flex-row items-center justify-start w-full h-full">
        <div className="container flex flex-wrap self-center gap-2 ml-[570px]">
          <div className="h-32 mt-2 -mb-4 flex flex-row justify-start w-full items-center ml-[2.5vw]">
            <h2 className="text-3xl font-bold rounded-full">
              Let's accept the challenge
            </h2>
            <hr className="border-b-2 border-colorPurple w-[20vw]" />
            <button
              className="px-5 py-2 text-xl font-semibold rounded-full text-colorWhite bg-colorGrayDark/30"
              onClick={() => window.location.assign("/explore")}
            >
              <div className="px-5 py-2 rounded-full bg-colorPurple hover:bg-colorGrayDark">
                View More Games <i className="ri-arrow-right-line"></i>
              </div>
            </button>
          </div>
          <div className="grid-cols-2 grid h-[120vh] w-[88%] justify-start items-start gap-2">
            {/* Sorting Limited Index */}
            {CardList.filter((card) => card.type)
              .slice(12, 16)
              .map((content, index) => {
                const gameCategory = content.category.split(" ");
                const contentID = content.id.replace(/ /g, "-").toLowerCase();
                const encryptParams = encryptData(encodeURI(contentID));

                return (
                  <div
                    className="cursor-pointer more-game-slide hover:opacity-70"
                    key={index}
                    onClick={() => {
                      window.location.assign(`/games/${encryptParams}`);
                    }}
                  >
                    <img
                      src={content.thumbnail}
                      alt="Image Thumbnail"
                      className="h-[550px] w-[550px] object-cover rounded-3xl opacity-75"
                    />
                    <div className="z-[10] h-[200px] w-[550px] flex justify-start items-start bg-gradient-to-b from-colorWhite/0 to-colorPurple -mt-[12rem] flex-col rounded-b-xl">
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
                        {gameCategory.slice(0, 2).map((category, index) => (
                          <li className="flex gap-1" key={index}>
                            <i className="ri-gamepad-fill"></i>{" "}
                            {category.replace(/-/g, " ")}
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

export default ListSecondGameCards;
