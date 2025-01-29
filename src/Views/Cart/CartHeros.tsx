const CartHeros = () => {
  return (
    <section
      className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-start p-20 h-[80vh] -z-0`}
    >
      <div className="flex items-center  justify-center h-[50vh] flex-col uppercase">
        <h2 className="text-6xl font-bold">Your Cart</h2>
        <p className="text-2xl font-medium text-colorAqua">
          pay the game and play it!
        </p>
      </div>
    </section>
  );
};

export default CartHeros;
