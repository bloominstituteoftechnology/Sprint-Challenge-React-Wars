import React from 'react';
import Char from './Char'; 

const Characters = props =>{
    return <div className="chars-container">
        {props.chars.map(char => <Char key={char.name} char={char} />)}
    </div>;
}
export default Characters; 