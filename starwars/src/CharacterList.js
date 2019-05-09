import React from 'react';
import Character from './Character';
import "./CharacterList.css";
const CharacterList = props => {
    console.log(props, 'charList');
    return (
    <div className="char-list-container">
        {props.chars.map (char => {
            return <Character char = { char } />
        })}
    </div>
    )};

export default CharacterList;