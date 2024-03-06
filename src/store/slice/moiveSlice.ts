import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { MOVIE_LIST } from "../../util/constant";

interface MovieState {
  movies: any[];
  page: number;
  totalpage: number;
  isListView: boolean;
  movieListType: string;
}

const initialState: MovieState = {
  movies: [],
  page: 1,
  totalpage: 0,
  isListView: false,
  movieListType: MOVIE_LIST.NOW_PLAYING,
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
    changeViewMode: (state) => {
      state.isListView = !state.isListView;
    },
    changeMovieListType: (state, action: PayloadAction<string>) => {
      state.movieListType = action.payload;
      state.page = 1;
    },
  },
});

export const {
  initMovieSate,
  nextPage,
  previousPage,
  changeViewMode,
  changeMovieListType,
} = movieSlice.actions;

export const selectMovie = (state: RootState) => state.movies.movies;

export default movieSlice.reducer;
