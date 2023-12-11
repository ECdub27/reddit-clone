import react from 'react';
import { Avatar } from '@mui/material';
import RedditBot from './RedditBot.png'



const RedditAvatar = (props) =>{
const {name} = props;

return (
    <Avatar src={RedditBot} 
    alt='default user '
    className='avatar-profile-image'>
        user || {name}
    </Avatar>
);
};

export default RedditAvatar;