import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    const characters = props.characterList.slice(0, props.characterListLength).map(character => {
        return (
            <div key={character.created} className='character-card'>
                <Character character={character} />
            </div>
        );
    });

    return (
        <div className='character-container'>
            {characters}
        </div>
    );
};

export default CharacterList;