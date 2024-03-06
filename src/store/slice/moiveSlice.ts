import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface MovieState {
  movies: any[];
  page: number;
  totalpage: number;
}

const initialState: MovieState = {
  movies: [],
  page: 1,
  totalpage: 0,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    initMovieSate: (state, action: PayloadAction<number>) => {
      state.totalpage = action.payload;
    },
    nextPage: (state) => {
      if (state.page > state.totalpage) return;
      state.page += 1;
    },
    previousPage: (state) => {
      if (state.page <= 1) return;
      state.page -= 1;
    },
  },
});

export const { initMovieSate, nextPage, previousPage } = movieSlice.actions;

export const selectMovie = (state: RootState) => state.movies.movies;

export default movieSlice.reducer;
