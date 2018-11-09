import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            <h2>Star Wars Character List</h2>
            <div className="character-list-container">
                {props.starwarsChars.map( character => (
                    <Character 
                        key={character.name}
                        character={character}
                        // Add more info here on characters
                    />
                )

                )} 
            </div>
        </div>
    )
}

export default CharacterList;
