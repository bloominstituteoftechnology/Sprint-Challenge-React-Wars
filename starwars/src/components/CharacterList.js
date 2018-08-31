import React from 'react';
import Character from './Character.js';

const CharacterList = props => {
    return (
        <div>
            {props.characters.map( character => <Character character={character}/> )}
        </div>
    );
}

export default CharacterList;