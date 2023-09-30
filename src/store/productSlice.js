import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
    {
        id: 1,
        productName: "Product 1",
        productCategory: "electronics",
        productFreshness: "Brand New",
        img:"bg1.png",
        additionalDescription: "Baju Khas Sulawesi",
        randomNumber: 123.45,
      },
      {
        id: 2,
        productName: "Product 2",
        productCategory: "clothing",
        productFreshness: "Second Hand",
        img: "bg1.png",
        additionalDescription: "Topi khas sulawesi",
        randomNumber: 67.89,
      },
  ],
};

const productSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.product = action.payload;
    },
    deleteProducts: (state, action) => {
      const productIdToDelete = action.payload;
      const updatedProductList = state.product.filter(
        (item) => item.id !== productIdToDelete
      );

      if (updatedProductList.length < state.product.length) {
        state.product = updatedProductList;
        window.alert("Product deleted successfully!");
      } else {
        window.alert("Product not found!");
      }
    },
    editProducts: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.product.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex !== -1) {
        const updatedProductData = action.payload;
        const shouldEdit = window.confirm(
          "Are you sure you want to edit this product?"
        );

        if (shouldEdit) {
          state.product[existingProductIndex] = updatedProductData;

          window.alert("Product edited successfully!");
        }
      } else {
        window.alert("Product not found!");
      }
    },
  },
});

export const { addProducts, deleteProducts, editProducts } =
  productSlice.actions;

export default productSlice.reducer;
