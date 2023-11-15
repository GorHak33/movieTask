import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    featured: data.Featured,
    trendingNow: data.TendingNow,
  },
  reducers: {
    updateFeatured: (state, action) => {
      state.featured = action.payload;
      state.trendingNow.sort((a, b) => {
        if (a.Id === state.featured.Id) {
          return -1;
        } else if (b.Id === state.featured.Id) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
});

export const { updateFeatured } = dataSlice.actions;

export default dataSlice.reducer;
