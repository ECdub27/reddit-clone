import React from "react";
import './card.css';


const Postcard = (props) =>{
return  <div className={`card ${props.className}`}>
{props.children}
</div>
};

export default Postcard;