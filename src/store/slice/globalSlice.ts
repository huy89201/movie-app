import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface GlobalState {
    value: number
}

const initialState: GlobalState = {
    value: 0,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {

    },
})

export const { } = globalSlice.actions

export const selectGlobal = (state: RootState) => state.global.value

export default globalSlice.reducer