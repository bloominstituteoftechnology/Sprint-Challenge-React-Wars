import React from 'react';
import Character from './Character.js';

import './StarWars.css';

const CharacterList = props => {
    return(
        <div 
        className="character-list"
        >
            {props.characterList.map(character => (
                <Character 
                    key={character.created} 
                    character={character}
                />
            ))}
        </div>
    );
};

export default CharacterList;