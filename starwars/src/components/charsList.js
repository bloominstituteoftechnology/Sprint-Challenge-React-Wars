import React from 'react';
import Chars from 'chars';
import 'StarWars.css';

const charsList = props => {
    return <div className= 'stars'>{
        props.chars.map (chars => <chars starChars = {chars}/>)
        }
    
    
     </div>;
     };
     export default charsList;