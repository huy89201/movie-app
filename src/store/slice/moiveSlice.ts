import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface MovieState {
    movies: any[]
}

const initialState: MovieState = {
    movies: [],
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
})

export const { } = movieSlice.actions

export const selectMovie = (state: RootState) => state.movies.movies

export default movieSlice.reducer