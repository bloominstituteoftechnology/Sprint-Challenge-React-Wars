import React from 'react';
import Chars from 'char';
import 'StarWars.css';

const charList = props => {
    return <div className= 'stars'>{
        props.char.map (char => <chars starChar = {char}/>)
        }
    
    
     </div>;
     };
     export default charList;