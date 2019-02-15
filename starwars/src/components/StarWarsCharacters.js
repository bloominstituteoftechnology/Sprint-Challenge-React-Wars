import React from 'react';
import Character from './Character'
import './StarWars.css'

const StarWarsCharacters = props => {
    return (
        <div className="characters-list">
            {props.characters.map(character => {
            return <Character key={character.url} character={character}/>
            })}
        </div>
    );
}

export default StarWarsCharacters;