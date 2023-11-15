import {createStore, applyMiddleware, combineReducers, configureStore} from 'react-redux';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { popularFeedSlice } from './popularFeedSlice';

export default configureStore({
    reducer: combineReducers({
        popularFeedSlice,
    })
})