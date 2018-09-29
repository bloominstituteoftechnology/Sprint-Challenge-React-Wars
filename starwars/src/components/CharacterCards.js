import React from 'react';
import Character from './Character';

const CharacterCards = (props) => {
    return ( 
        <div className="character-card">
            {props.character.map(character =>
                <Character
                key={character.name}
                character={character}
                />
                )}
        </div>
     );
}
 
export default CharacterCards;