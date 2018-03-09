import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterContainer.css';

const CharacterContainer = (props) => {
    return (
        <div className='characterContainer'>
            {props.characters.map(character => {
                return <CharacterCard key={`${character.name} ${character}`} characterCard={character}/>
            })}
        </div>
    )
};

export default CharacterContainer;