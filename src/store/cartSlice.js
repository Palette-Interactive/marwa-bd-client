import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    itemList: [],
    totalQuantity: 0,
  },

  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item._id === newItem._id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        newItem.quantity = 1;
        newItem.totalPrice = newItem.price;
        state.itemList.push(newItem);
        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find((item) => item._id === newItem._id);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item._id !== newItem._id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
