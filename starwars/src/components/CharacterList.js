import React from 'react';
import Character from './Character';

const CharacterList = props => {

    return (
        <div className="container">
            {props.starwarsChars.map(character => {
                return (
                    <Character 
                        name={character.name}
                        key={character.id}
                        character={character}
                    />
                ) 
            })}
        </div>
    )

}

export default CharacterList;
