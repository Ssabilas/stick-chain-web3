import { useParams } from "react-router-dom";
import GameDetail from "../../Json/Detail/GameDetail.json";
import { decryptData } from "../../Utils/parseURL";

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const decryptedData = decryptData(decodeURI(id as string));
  const saveToLocalStorage = (item: string) => {
    const normalizedItem = item.replace(/ /g, "-").toLowerCase(); // Normalisasi item ID
    const existingItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    if (!existingItems.includes(normalizedItem)) {
      existingItems.push(normalizedItem);
      localStorage.setItem("cartItems", JSON.stringify(existingItems));
    }
  };

  return (
    <>
      {GameDetail.filter(
        (detail) => detail.id.replace(/ /g, "-").toLowerCase() === decryptedData
      ).map((detail, index) => {
        const category = detail.category.split(" ");
        const detailId = detail.id.replace(/ /g, "-").toLowerCase();
        return (
          <>
            <section
              className="h-[80vh] flex justify-center items-center bg-[url('/assets/Hero-Gradient.png')] bg-cover"
              key={index}
            >
              <div className="flex justify-center w-full gap-12">
                <img
                  src={detail.thumbnail}
                  alt="Thumbnail"
                  className="object-cover w-[500px] h-[500px] rounded-3xl"
                />
                <div className="mt-12 w-[40%] gap-4 flex flex-col">
                  <h2 className="text-2xl font-semibold text-colorAqua">
                    John Doe <i className="ri-checkbox-circle-line"></i>
                  </h2>
                  <h3 className="text-4xl font-bold uppercase">
                    {detail.name}
                  </h3>
                  <ul className="flex items-center gap-2">
                    {category.map((item, index) => (
                      <li
                        className="flex gap-1 text-xl font-semibold uppercase"
                        key={index}
                      >
                        <i className="ri-gamepad-line"></i>
                        {item.replace(/-/g, " ")}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="w-[60%]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit cupiditate sit deserunt exercitationem dolore ad
                      cumque vel explicabo blanditiis fuga!
                    </p>
                  </div>
                  <hr className="w-full text-colorAqua" />
                  <div className="flex w-full gap-32 mt-4">
                    <div className="w-full">
                      <h4>Current Price</h4>
                      <p className="text-4xl font-semibold uppercase">
                        {detail.price} ETH
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-full font-semibold">
                      <button className="px-12 py-1 h-[40px]  uppercase border-2 rounded-l-full outline-none bg-colorAqua text-colorViolet border-colorAqua hover:text-colorAqua hover:bg-transparent ">
                        buy now
                      </button>
                      <button
                        className="px-12 py-1 h-[40px] uppercase border-2 rounded-r-full outline-none hover:bg-transparent bg-colorPurple hover:border-colorWhite border-colorPurple text-colorWhite "
                        onClick={() => saveToLocalStorage(detailId)}
                      >
                        <i className="ri-shopping-cart-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default GameDetails;
