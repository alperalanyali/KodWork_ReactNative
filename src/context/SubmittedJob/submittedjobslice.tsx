import { createSlice } from '@reduxjs/toolkit'

const submittedJobSlice = createSlice({
    name:"SubmittedJob",
    initialState:{
        submittedJobs:[]
    },
    reducers:{
        addSubmit : (state, action) => {
            state.submittedJobs = state.submittedJobs.concat(action.payload)
        }
    }
})

export const {addSubmit} = submittedJobSlice.actions;
export default submittedJobSlice.reducer;