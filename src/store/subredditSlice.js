import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddit } from "../api/api";

const initialState = {
subreddits: [],
error: false,
isLoading: false,

};

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers:{

    startGetSubreddits(state){
        state.isLoading = true;
        state.error = false;
    },
getsubRedditsSuccess(state,action){
        state.isLoading = false;
        state.subreddits = action.payload;
    },
    getsubRedditsFailed(state){
     state.isLoading = false;
     state.error = true;
    },
    },
});


export const {startGetSubreddits, getsubRedditsSuccess, getsubRedditsFailed} = subredditSlice.actions;
export default subredditSlice.reducer;


export const fetchSubreddits = createAsyncThunk(async (dispatch) =>{
    try {
        dispatch(startGetSubreddits);
        const subreddits = await getSubreddit
        dispatch(getsubRedditsSuccess(subreddits));
    } catch (error) {
        dispatch(getsubRedditsFailed());
    }
});

export const selectSubreddits = (state) => state.subreddits.subreddits;