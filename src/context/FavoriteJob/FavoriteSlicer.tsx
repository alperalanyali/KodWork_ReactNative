import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name:"favoriteJobs",
    initialState:{
        favoriteJobs:[]
    },
    reducers:{
        addFavorite : (state,action)=>{            
            state.favoriteJobs = state.favoriteJobs.concat(action.payload)
        },
        removeFavorite : (state, action) =>{
            state.favoriteJobs = state.favoriteJobs.filter(item => item.id !== action.payload)
        }
    }
})

export const {addFavorite,removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;