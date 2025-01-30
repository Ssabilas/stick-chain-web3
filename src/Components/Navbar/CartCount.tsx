import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import CardList from "../../Json/Home/CardListView.json";

interface CartCountsInterface {
  count: number;
}

export const CartCountsComponent: React.FC<CartCountsInterface> = ({
  count,
}) => {
  return (
    <span className="absolute top-0 right-0 px-2 text-sm font-bold rounded-full bg-colorPurple">
      {count}
    </span>
  );
};

export const CartCounts = () => {
  const cartItems = useSelector((state: RootState) => state.cart.itemList);

  const filteredItems = CardList.filter((content) => {
    const contentId = content.id.replace(/ /g, "-").toLowerCase();
    return cartItems.includes(contentId);
  });

  return <CartCountsComponent count={filteredItems.length} />;
};
