import { configureStore } from "@reduxjs/toolkit";
import {productsReducer}  from "../redux/features/productSlices";

export const store = configureStore({
  reducer: {
    getProduct: productsReducer
  },
});