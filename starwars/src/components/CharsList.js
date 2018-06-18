import React from 'react';
import Char from './Char';

const CharsList = props => {
    return (
    <div className = "total">
{props.chars.map(char => <Char key={Math.random()} swChar = {char} />)}
    </div>
    )
}

export default CharsList;