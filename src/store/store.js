// import { combineReducers, useStore} from 'react-redux';
import {  configureStore } from '@reduxjs/toolkit';
import popularFeedReducer from './popularFeedSlice';
import redditSliceReducer from './redditSlice';
import subredditSliceReducer from './subredditSlice';

// import { composeWithDevTools } from '@redux-devtools/extension';

//const composedEnhancer = composeWithDevTools({
 
 const store = configureStore({
reducer:{
  reddit: redditSliceReducer,
    popular_feed: popularFeedReducer,
    subreddits: subredditSliceReducer,
},

});


export default store;