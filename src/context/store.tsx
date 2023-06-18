import { configureStore } from '@reduxjs/toolkit'
import favoriteJobReducer from './FavoriteJob/FavoriteSlicer';
import submittedJobsReducer from './SubmittedJob/submittedjobslice'
export const store = configureStore({
  reducer: {
    favoriteJobs:favoriteJobReducer,
    submittedJobs:submittedJobsReducer
  },
})


export type RootState = ReturnType<typeof store.getState>