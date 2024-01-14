import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/product/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
