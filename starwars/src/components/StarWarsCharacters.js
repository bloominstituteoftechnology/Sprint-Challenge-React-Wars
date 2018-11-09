import React from 'react';
import Character from './Character'

const StarWarsCharacters = props => {
    return (
        <div className='character-card'>
            {props.starwarsCharacters.map( characterInMap => (
                <Character
                    characterOnProps={characterInMap} 
                />
            ))}
        </div>
    )
}

export default StarWarsCharacters;