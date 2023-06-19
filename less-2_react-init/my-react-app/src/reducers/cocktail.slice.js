import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fw } from "../utils/fw";

const searchByFirstLetter = createAsyncThunk(
  "cocktail/searchByFirstLetter",
  async ({ url, endpoint, method }) => {
    try {
      const response = await fw({ url, endpoint, method });
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    loading: false,
    drinks: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchByFirstLetter.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(searchByFirstLetter.fulfilled, (state, action) => {
      const { drinks } = action.payload;
      state.drinks = drinks;
      state.loading = false;
    });
  },
});

export { searchByFirstLetter };
export default cocktailSlice.reducer;
