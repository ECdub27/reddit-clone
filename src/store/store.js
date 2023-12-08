import {createStore, applyMiddleware, combineReducers, configureStore} from 'react-redux';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { popularFeedSlice } from './popularFeedSlice';
import {redditSlice} from './redditSlice';
export default configureStore({
    reducer: combineReducers({
        popularFeedSlice,
        redditSlice,
    })
})