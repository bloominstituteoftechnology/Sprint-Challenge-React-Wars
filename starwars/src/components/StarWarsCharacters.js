import React from 'react';
import Character from './Character'

const StarWarsCharacters = props => {
    return (
        <div className="characters-list">
            {props.characters.map(character => {
            return <Character character={character}/>
            })}
        </div>
    );
}

export default StarWarsCharacters;