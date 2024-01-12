// import { combineReducers, useStore} from 'react-redux';
import {  configureStore,combineReducers } from '@reduxjs/toolkit';
import popularFeedReducer from './popularFeedSlice';
import redditSliceReducer from './redditSlice';
import subredditSliceReducer from './subredditSlice';
import { applyMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@redux-devtools/extension';

//const composedEnhancer = composeWithDevTools({
 
export default configureStore({
reducer:combineReducers({
  reddit: redditSliceReducer,
    popular_feed: popularFeedReducer,
    subreddits: subredditSliceReducer,
}),

});
{/*export default configureStore({
  reducer:combineReducers({
    reddit: redditSliceReducer,
    popular_feed: popularFeedReducer,
    subreddits: subredditSliceReducer,
  }),
});

*/}
