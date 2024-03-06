import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import globalReducer from './slice/globalSlice'
import moiveReducer from './slice/moiveSlice'
import { movieApi } from '../service/movieAPi'

export const store = configureStore({
    reducer: {
        global: globalReducer,
        movies: moiveReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware),

})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch