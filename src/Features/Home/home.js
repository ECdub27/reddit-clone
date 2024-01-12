import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Posts/posts';
import { fetchRedditPost,setSearchTerm, fetchComments, selectFilteredPost } from '../../store/redditSlice';
import Subreddits from '../Subreddits/subreddits';
import { fetchPopularFeed } from '../../store/popularFeedSlice';


const Home = ( ) =>{
const reddit =  useSelector((state) => state.reddit);
const dispatch = useDispatch();
const posts =  useSelector(selectFilteredPost)
const {error, isLoading, searchTerm, selectedSubreddit} = reddit;

useEffect(() => {

    dispatch(fetchRedditPost(selectedSubreddit));

}, [selectedSubreddit,dispatch]);


const onToggleComments = (index) =>{
    const getComments = (permalink) =>{
        dispatch(fetchComments(index, permalink));
    }
    return getComments;
}

if(error){
return (
    <div>
        <h2 className='error-heading'>Post Failed to Load {selectedSubreddit}</h2>
        <button type='button' onClick={() => dispatch(fetchRedditPost(selectedSubreddit))}>Go Home</button>
    </div>
)
}


if(posts === 0){
    return (
        <div>
            <h2>Post Failed to Load "{searchTerm}" </h2>
            <button type='button' onClick={() => dispatch(setSearchTerm(''))}>Go Home</button>
        </div>
    )
}


return (
    <div>
        <h2>Posts</h2>
       
        {posts.map((post, index) => (
            <Post key={post.id}
            post={post}
            onToggleComment={onToggleComments(index)}/>
        ))}
        
    </div>
);
};

export default Home;