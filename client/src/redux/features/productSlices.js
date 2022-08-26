import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const { data } = await axios.get(`product`)
    return data
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState: { isLoading: true, errMess: null, productsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.productsArray = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const productsReducer = productsSlice.reducer;

