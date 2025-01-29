import React, { useState, useEffect } from "react";
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
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Function to update cartItems from localStorage
  const updateCartItems = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
  };

  // Load cartItems on component mount
  useEffect(() => {
    updateCartItems();
  }, []);

  // Listen for changes to localStorage from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cartItems") {
        updateCartItems();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Filter CardList based on items in cartItems
  const filteredItems = CardList.filter((content) => {
    const contentId = content.id.replace(/ /g, "-").toLowerCase();
    return cartItems.includes(contentId);
  });

  return <CartCountsComponent count={filteredItems.length} />;
};
