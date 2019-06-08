import React from 'react';
import Character from './Character'
import './StarWars.css'

const CharacterList = (props) => {
    return (
        <div className="characterList">
            {props.starwarsChars.map(
                character => <Character character = {character} />
            )}
        </div>
    )
}

export default CharacterList;