import React from "react";
import { useState } from "react";
import Comments from "../Comment/comment";
import RedditAvatar from "../Avatar/avatar";
import Postcard from "../../Components/Card/card";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';


const Post = (props) => {


    const [voteValue, setVoteValue] = useState(0);
const {onToggleComments, posts } = props;
 
const onHandleVote = (newValue) =>{
if(newValue === voteValue){
    setVoteValue(0)
} else if (newValue === 1){
    setVoteValue(1)
} else {
 setVoteValue(-1)
}
}


const renderUpVote =(newValue) =>{
if (newValue === 1){
    return <ArrowUpwardSharpIcon className='up-vote'/>
}
}
const renderDownVote = newValue =>{
    if (newValue === -1){
        return  <ArrowDownwardSharpIcon className='down-vote' />
    }
}
const getVoteType =() =>{
if (voteValue === 1){
    return 'up-vote'
} if (voteValue === -1){
    return 'down-vote'
}
}

const renderComments = ( ) =>{
    // use the states of the each error , loading, resolved
if(Comments.isLoading){
    return <div>
           <Stack>
    {/* For variant="text", adjust the height via font-size */}
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={60} />
           </Stack>
    </div>
}
if(Comments.getCommentsFailure){
    return (
         <div className="comment-failure">
  <h3>Comments failed to Load</h3>
         </div>
    );
}
if(Comments.getCommentsSuccess){

}
}
return (
<article >
    <Postcard />
 <div>

 </div>
</article>
);
};


export default Post;