import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, nombre, precio, cantidad } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].cantidad += cantidad;
      } else {
        state.cartItems.push({ id, nombre, precio, cantidad });
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
