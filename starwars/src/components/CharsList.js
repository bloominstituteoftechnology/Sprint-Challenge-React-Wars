import React from 'react';
import Char from './Char';


const CharsList = props => {
    return <div>{props.chars.map(char => <Char swChar={char} />)}</div>
};

export default CharsList;
