import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, nombre, precio, cantidad, imagen } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].cantidad += cantidad;
      } else {
        state.cartItems.push({ id, nombre, precio, cantidad, imagen });
      }
    },

    updateQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.cantidad = newQuantity;
      }
    },
  },
});
export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
