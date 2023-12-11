import React, {useState} from "react";
import { Avatar } from "@mui/material/Avatar";
import ReactMarkdown from 'react-markdown';
import DateTimeFieldValue from "../../Util/date";



const Comments = (props) =>{

    
 const {comment} = props;

return (
    <div>
        <div>
            <Avatar name = {comment.author}/>
            <p className='author-name'>{comment.author}</p>
            <p className='created-time'> <DateTimeFieldValue/> </p>
        </div>
        <ReactMarkdown>{comment.body}</ReactMarkdown>
    </div>
);



};