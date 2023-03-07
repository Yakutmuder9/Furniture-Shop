import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProducts = createAsyncThunk(
  "singleProducts/fetchSingleProducts",
  async () => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    let response = await fetch(`https://furniture-shop-backend.onrender.com/products/${id}`);
    if (response.status === 200) {
      let data = await response.json();
      return data
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProducts",
  initialState: { isLoading: true, errMess: null, singleProductArray: [] },
  reducers: {},
  extraReducers: {
    [fetchSingleProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.singleProductArray = action.payload;
    },
    [fetchSingleProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const singleProductsReducer = singleProductSlice.reducer;