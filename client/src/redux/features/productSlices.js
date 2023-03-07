import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    let response = await fetch('https://furniture-shop-backend.onrender.com/products');
    if (response.status === 200) {
      let data = await response.json();
      return data
    }
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

