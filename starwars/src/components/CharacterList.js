import React from "react";
import Character from './Character.js';
// going to iterate over the list of characters in the state

const CharacterList = props => {
    return (
        <div>
            {props.charsList.map(char => (
                <Character
                    key = {Math.random()} 
                    singleCharacter = {char} 
                />
            ))}
        </div>
    )
}




export default CharacterList;