import { combineReducers, configureStore} from 'react-redux';

import { popularFeedSlice } from './popularFeedSlice';
import {redditSlice} from './redditSlice';



export default configureStore({
    reducer: combineReducers({
        popularFeedSlice,
        redditSlice
    })
});