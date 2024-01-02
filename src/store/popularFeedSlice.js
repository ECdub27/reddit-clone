import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
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

const selectPopularFeed = state => state.reddit.popularFeed;

export const {startGetPopularFeed, getPopularFeedSuccess , failedPopularFeed} = popularFeedSlice.actions;
export default popularFeedSlice.reducer;
// redux thunk to dispatch actions
export const fetchPopularFeed = createAsyncThunk('PopularFeed/fetchpopular', async (dispatch) =>{
try {
dispatch(startGetPopularFeed);
const redditFeed = await getPopularFeedSuccess;
const popularFeedWithMetaData = popularFeed.map((popularFeed) => ({
    ...popularFeed,
    isLoading: false,
    error: false,
}));
if(redditFeed){
    dispatch(getPopularFeedSuccess(popularFeedWithMetaData));
}
} catch (error){
dispatch(failedPopularFeed);
}
}
)

    



