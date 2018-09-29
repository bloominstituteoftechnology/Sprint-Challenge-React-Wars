import React from 'react';
import './StarWars.css';
import Character from './Character';

function CharacterList(props) {
    return (
        <div>
            {props.chars.map(char => <Character char={char} />)}
        </div>
    );
};

 export default CharacterList; 
