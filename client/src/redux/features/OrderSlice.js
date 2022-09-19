import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async () => {
    const { data } = await axios.get(`order`)
    return data
  }
);

const ordersSlice = createSlice({
  name: "order",
  initialState: { isLoading: true, errMess: null, ordersArray: [] },
  reducers: { 
    getOrderDetail(state, action) {
    const existingIndex = state.cartItems.findIndex(
      (item) => item._id === action.payload._id
    );

    if (existingIndex >= 0) {
      state.cartItems[existingIndex] = {
        ...state.cartItems[existingIndex],
        cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
      };
    } else {
      let tempProductItem = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(tempProductItem);
    }
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }},
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.ordersArray = action.payload;
    },
    [fetchOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});
export const { getOrderDetail} = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;