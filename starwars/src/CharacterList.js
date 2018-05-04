import React from 'react';

//this will be a state-less component that will iterate over the characters in the API
//we want to use map because we are returning a new array of elements **NEW COMPONENT**
import Character from './Character';
const CharacterList = props => {
    return (
    <div>
        {props.chars.map (char => {
            return <Character char = {char} />
        })}
    </div>
    )};

export default CharacterList;