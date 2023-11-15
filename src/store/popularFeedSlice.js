import {createSlice} from '@reduxjs/toolkit';
import { popularFeed } from '../api/api';

const initialState = {
    popularFeed: [],
    isLoading: true,
    error: false
};

const popularFeedSlice = createSlice({
    name: 'Popular Feed',
    initialState,
    reducers: {
        startGetPopularFeed(state){
            state.isLoading = true;
            state.error = false;
        },
        getPopularFeedSuccess(state,action){
            state.isLoading = false;
            state.popularFeed = action.payload;
        },
        failedPopularFeed(state){
            state.isLoading = false;
            state.error = true;
        },
    },

});

export const {startGetPopularFeed, getPopularFeedSuccess , failedPopularFeed} = popularFeed.reducer;
// redux thunk to dispatch actions
export const fetchPopularFeed = async (dispatch) =>{
try {
   dispatch(startGetPopularFeed);
   const redditFeed = await getPopularFeedSuccess;
   dispatch(getPopularFeedSuccess(popularFeed))
} catch (error) {
 dispatch(failedPopularFeed);   
}
};

