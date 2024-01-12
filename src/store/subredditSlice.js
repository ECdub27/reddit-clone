import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubRedditPost, getSubreddit } from "../api/api";
import { redditRoot } from "../api/api";
import axios from 'axios';



export const fetchSubreddits = createAsyncThunk('subreddit/fetchSubreddit' , async (subreddit) =>{
    
    const response = await getSubreddit(subreddit);
    return response.data;
},

);



const initialState = {
subreddits: [],
error: null,
isLoading: false,
status: 'idle',


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
    extraReducers(builder){
        builder.addCase(fetchSubreddits.pending, (state) =>{
            state.isLoading = 'loading'
        })
        .addCase(fetchSubreddits.fulfilled, (state,action) =>{
            state.status = 'succeeded';
            state.subreddits = action.payload;
        }).addCase(fetchSubreddits.rejected, (state,action) =>{
            state.error = action.error.message
            state.status = 'failed'
        })
    }
});



export const {startGetSubreddits, getsubRedditsSuccess, getsubRedditsFailed} = subredditSlice.actions;
export default subredditSlice.reducer;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const getSubredditsStatus = (state) => state.subreddits.status;
export const getSubredditsError = (state) =>  state.subreddits.error;