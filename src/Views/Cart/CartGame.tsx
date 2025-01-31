import CardView from "../../Json/Home/CardListView.json";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import Decimal from "decimal.js";

const CartGames = () => {
  const cartItems = useSelector((state: RootState) => state.cart.itemList);

  const filteredItems = CardView.filter((content) => {
    const contentId = content.id.replace(/ /g, "-").toLowerCase();
    return cartItems.includes(contentId);
  });
  const priceItems = filteredItems.map((item) => item.price);

  const sum = priceItems.reduce(
    (calculate, currentValue) => new Decimal(calculate).plus(currentValue || 0),
    new Decimal(0)
  );

  return (
    <>
      <section className="h-[100vh] flex justify-center items-center bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw]">
        <div className="container">
          {/* Tampilkan item yang difilter */}
          <div className="flex flex-row gap-32">
            <div className="flex flex-col w-full gap-4 px-12 py-8 bg-colorGrayDark/50 rounded-3xl">
              <h2 className="py-2 text-4xl font-semibold text-colorWhite">
                Cart Summary
              </h2>
              <div className="flex flex-col items-start justify-center w-full">
                {filteredItems.length > 0 ? (
                  filteredItems.map((content, index) => (
                    <div
                      className="flex flex-row items-start justify-start w-full gap-2 my-2"
                      key={index}
                    >
                      <img
                        src={content.thumbnail}
                        alt="Cart Item"
                        className="w-[80px] h-[80px] object-cover rounded-xl"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <h2 className="text-2xl font-medium">{content.name}</h2>
                        <p className="text-xl text-colorAqua">
                          <i className="ri-eth-fill"></i> {content.price}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="py-2 text-colorWhite">No items</p>
                )}
              </div>
              <hr className="w-full border-b border-colorWhite" />
              <div className="flex items-center">
                <h3 className="self-start w-full text-4xl font-bold">Total</h3>
                <p className="flex items-end justify-end w-full text-2xl font-medium text-colorAqua">
                  <i className="ri-eth-fill"></i> {sum.toFixed(5)}
                </p>
              </div>
              <div className="flex flex-row w-full gap-2">
                <button className="w-full px-5 py-2 text-xl font-semibold bg-colorAqua/30 rounded-xl hover:bg-colorAqua/50">
                  <i className="ri-eth-fill"></i> Pay Now
                </button>
                <button
                  className="w-full px-5 py-2 text-xl font-semibold bg-colorPurple/30 rounded-xl hover:bg-colorPurple/50"
                  onClick={() => window.location.assign("/explore")}
                >
                  <i className="ri-shopping-bag-line"></i> Continue Shopping
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-2">
              <h2 className="text-4xl font-bold">Have a coupon ?</h2>
              <p className="font-medium text-colorAqua">
                Add your code for an instant cart discount
              </p>
              <div className="flex flex-row px-5 py-2 border-2 border-colorWhite">
                <div className="flex flex-row gap-2">
                  <i className="ri-coupon-2-fill"></i>
                  <input
                    type="text"
                    className="bg-transparent outline-none"
                    placeholder="Coupon Code"
                  />
                </div>
                <button className="text-colorAqua hover:text-colorWhite">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartGames;
