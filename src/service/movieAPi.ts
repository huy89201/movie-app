import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import options from './header'

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getMovieNowPlayinng: builder.query({
            // query: () => `/movie/now_playing?language=en-US&page=1`,
            query: () => ({
                url: `/movie/now_playing?language=en-US&page=1`,
                ...options
            }),
        }),
    }),
})

export const { useGetMovieNowPlayinngQuery } = movieApi