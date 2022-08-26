import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProducts = createAsyncThunk(
  "singleProducts/fetchSingleProducts",
  async () => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    const { data } = await axios.get(`${id}`)
    return data
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