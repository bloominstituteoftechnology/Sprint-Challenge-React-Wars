import React from 'react';
import Char from './Characters.js';

const CharactersList = (props) => {
    // console.log(props.starwarsChars[0]);
    return <div>{props.starwarsChars.map(char => <Char key={char.age} char={char}/>)}</div>;
};

export default CharactersList;
