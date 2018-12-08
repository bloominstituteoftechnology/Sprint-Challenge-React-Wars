import React from 'react';
import Character from './Character';

const CharacterList = props => {

    return (
        <div className="container">
            {props.starwarsChars.map(character => {
                return (
                    <Character 
                        key={character.created}
                        name={character.name}
                        character={character}
                        height={character.height}
                        gender={character.gender}
                    />
                ) 
            })}
        </div>
    )

}

export default CharacterList;
