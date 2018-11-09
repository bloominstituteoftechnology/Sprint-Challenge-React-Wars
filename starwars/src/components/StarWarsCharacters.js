import React from 'react';
import Character from './Character'

const StarWarsCharacters = props => {
    return (
        <div className='cards-container'>
            {props.starwarsCharacters.map( characterInMap => (
                <Character
                    characterOnProps={characterInMap} 
                />
            ))}
        </div>
    )
}

export default StarWarsCharacters;