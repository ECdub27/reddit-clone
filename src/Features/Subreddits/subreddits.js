import React, {useEffect} from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { Card } from '@mui/material';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../store/redditSlice';
import { fetchSubreddits, selectSubreddits} from '../../store/subredditSlice';

function Subreddits(){
const dispatch = useDispatch();
const subReddits = useSelector(selectSubreddits);
const selectedSubreddit = useSelector(selectSelectedSubreddit);


useEffect(() =>{

dispatch(fetchSubreddits());
},[dispatch]);

return (
 <div>
<Card className='subreddit-Card'>
<h2>Subreddits</h2>
<ul>Feed
    {subReddits.map((subreddit) =>(
        <li key={subreddit.id}
        className={`${
            selectedSubreddit === subreddit.url && `selected-subreddit`
          }`}>
        <button type='Button'
        onClick={() =>  dispatch(setSelectedSubreddit(subreddit.url))}>
          <img src={"https://www.flaticon.com/free-icons/robot"}
        alt='"robot icons"'  
        className="subreddit icon"
        />
        {subreddit.display_name}
        </button> 

        
        </li>
    ))}
</ul>



</Card>
</div>

);
};

export default Subreddits;
// if you need to make slices know that you use "setSearchTerm" in redditSlice