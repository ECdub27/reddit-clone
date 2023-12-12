// import { combineReducers, useStore} from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {popularFeedSlice} from './popularFeedSlice';
import {redditSlice} from './redditSlice';



export default configureStore({
  reducer : combineReducers({
    reddit: redditSlice.reducer,
    popularFeed: popularFeedSlice.reducer,
  }),
});

