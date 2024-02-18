import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLikedProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProductIndex = state.value.findIndex(
        (product) => product.id === newProduct.id
      );

      if (existingProductIndex === -1) {
        state.value.push(newProduct);
      } else {
        state.value.splice(existingProductIndex, 1);
      }
    },
    deleteLikedProduct: (state) => {
      state.value -= 1;
    },
    countLikedProduct: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addLikedProduct, deleteLikedProduct, countLikedProduct } =
  likedSlice.actions;

export default likedSlice.reducer;
