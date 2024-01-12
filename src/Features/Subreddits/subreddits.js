import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '@mui/material';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../store/redditSlice';
import { getSubredditsStatus,fetchSubreddits, selectSubreddits } from '../../store/subredditSlice';
import { getSubreddit } from '../../api/api';


function Subreddits(){
const dispatch = useDispatch();
const subReddits = useSelector(selectSubreddits);
const selectedSubreddit = useSelector(selectSelectedSubreddit);
const subredditStatus = useSelector(getSubredditsStatus);

useEffect(() =>{
if(subredditStatus === 'loading'){
dispatch(fetchSubreddits(selectedSubreddit));
}
},[subredditStatus,dispatch]);

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