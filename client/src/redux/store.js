import { configureStore } from "@reduxjs/toolkit";
import {productsReducer}  from "../redux/features/productSlices";
import {singleProductsReducer}  from "./features/SingleProductSlice";
import {cartReducer}  from "../redux/features/CartSlice";
import {ordersReducer}  from "../redux/features/OrderSlice";

export const store = configureStore({
  reducer: {
    getProduct: productsReducer,
    getSingleProduct: singleProductsReducer,
    getCart: cartReducer,
    getOrder: ordersReducer,
  },
});