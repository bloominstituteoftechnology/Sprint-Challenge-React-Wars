import React from 'react';
import Char from './Char';
import './StarWars.css';
const CharsList = props => {
return <div className='wrapper'>{props.chars.map(char => <Char swChar={char} />)}</div>;
};

export default CharsList;