import React from 'react';
import { Avatar } from '@mui/material';
import RedditBot from './RedditBot.png';



const RedditAvatar = (props) =>{
const {name} = props;

const redditBotImage = {
    title: 'redditbot',
    src: RedditBot,
}
return (
    <Avatar src={redditBotImage} 
    alt='default user '
    className='avatar-profile-image'>
        user || {name}
    </Avatar>
);
};

export default RedditAvatar;