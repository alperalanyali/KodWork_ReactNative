import { configureStore } from '@reduxjs/toolkit'
import favoriteJobReducer from './FavoriteJob/FavoriteSlicer';
export const store = configureStore({
  reducer: {
    favoriteJobs:favoriteJobReducer
  },
})


export type RootState = ReturnType<typeof store.getState>