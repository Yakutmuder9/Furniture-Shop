import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "api/"

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(baseUrl + "products");
    return response.json();
  }
);

const productsSlice = createSlice({
  name: "products",
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