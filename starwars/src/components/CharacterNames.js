import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterNames = props => {
    return ( 
       <div className="name-container"> 
        {props.character.map(character => 
        <Character 
        key={character.name}
        newChar={character}/>
        )}
       </div>
    );
};

export default CharacterNames;