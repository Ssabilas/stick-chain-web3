// src/Store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";

// Konfigurasi persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer.reducer);

// Store Redux
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
