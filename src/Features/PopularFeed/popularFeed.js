import React, {useEffect} from 'react';
import { Card } from '@mui/material';
import { startGetPopularFeed, getPopularFeedSuccess } from '../../store/popularFeedSlice';
import { useDispatch, useSelector } from 'react-redux';
import {selectpopularFeed} from '../../store/popularFeedSlice';
function PopularFeed(){
    const dispatch = useDispatch();
     const popularfeedPost = useSelector(selectpopularFeed);

    useEffect(() =>{
       dispatch(startGetPopularFeed);
       dispatch(getPopularFeedSuccess);
    }, [dispatch]);


    return (
        <>
        <Card>
        <h2>Check out Reddit's Popular Feed</h2>
        <ul>Popular Feed
   {popularfeedPost.map((post) => (
    <li key ={post.id}
    className='popularFeed'>
      <button type='button'
      onClick={dispatch(getPopularFeedSuccess)}>Go Home</button>
   
    </li>
   ))}
        </ul>
       


        </Card>
        </>
    );
}

export default PopularFeed;