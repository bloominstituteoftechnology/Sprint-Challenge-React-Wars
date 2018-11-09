import React from 'react';
import Character from './Character'
import './StarWars.css'

function CharacterList(props){
    return (
        <div className='char-list'>
            {props.starwarsChars.map(
                character => <Character
                character = {character}
                />
            )}
        </div>
    )
}

export default CharacterList;