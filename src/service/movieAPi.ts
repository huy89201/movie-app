import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import options from "./header";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getMovieNowPlayinng: builder.query({
      query: ({ page, movieListType }) => ({
        url: `/movie/${movieListType}?language=en-US&page=${page}`,
        ...options,
      }),
    }),
    getMovieBySearch: builder.query({
      query: ({ page, query }) => ({
        url: `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
        ...options,
      }),
    }),
  }),
});

export const { useGetMovieNowPlayinngQuery, useGetMovieBySearchQuery } = movieApi;
