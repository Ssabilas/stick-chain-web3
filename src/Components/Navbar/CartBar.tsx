import CardView from "../../Json/Home/CardListView.json";

const CartBars = () => {
  // Ambil data dari localStorage
  const storedCartItems = localStorage.getItem("cartItems");
  const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  // Filter CardView berdasarkan item yang ada di cartItems
  const filteredItems = CardView.filter((content) => {
    const contentId = content.id.replace(/ /g, "-").toLowerCase();
    return cartItems.includes(contentId);
  }).slice(0, 3); // Batasi hanya 3 item

  return (
    <div className="absolute right-0 flex flex-col items-center justify-start w-[18vw] h-auto px-5 py-2 border-2 top-20 bg-colorGray/50 rounded-2xl border-colorGrayDark">
      {/* Tampilkan item yang difilter */}
      {filteredItems.length > 0 ? (
        filteredItems.map((content, index) => (
          <div
            className="flex flex-row items-center justify-start w-full gap-2 my-2"
            key={index}
          >
            <img
              src={content.thumbnail}
              alt="Cart Item"
              className="w-[60px] h-[60px] object-cover rounded-xl"
            />
            <div className="flex flex-col items-start justify-start">
              <h2 className="font-semibold">{content.name}</h2>
              <p className="text-colorAqua">
                <i className="ri-eth-fill"></i> {content.price}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="py-2 text-colorWhite">No items</p>
      )}

      {/* Tombol Cart */}
      <div className="flex flex-row w-full gap-2">
        <button className="w-full px-5 py-2 my-2 border-2 rounded-xl border-colorPurple/30 hover:bg-colorPurple bg-colorPurple/30" onClick={() => window.location.assign("/games/cart")}>
          <i className="ri-shopping-cart-2-fill"></i> View
        </button>
        <button
          className="w-full px-5 py-2 my-2 border-2 rounded-xl border-colorRed/30 hover:bg-colorRed/50 bg-colorRed/30"
          onClick={() => {
            localStorage.removeItem("cartItems");
            window.location.assign("/");
          }}
        >
          <i className="ri-shopping-cart-2-line"></i> Remove
        </button>
      </div>
    </div>
  );
};

export default CartBars;
