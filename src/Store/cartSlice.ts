// src/Store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  itemList: string[];
  showCart: boolean;
}

const initialState: CartState = {
  itemList: JSON.parse(localStorage.getItem("cartItemList") || "[]"), // Ambil data dari localStorage jika ada
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (!state.itemList.includes(id)) {
        state.itemList.push(id);
      }
      // Simpan state itemList ke localStorage
      localStorage.setItem("cartItemList", JSON.stringify(state.itemList));
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.itemList = state.itemList.filter((id) => id !== action.payload);
      // Simpan state itemList yang telah diupdate ke localStorage
      localStorage.setItem("cartItemList", JSON.stringify(state.itemList));
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;
export default cartSlice;
