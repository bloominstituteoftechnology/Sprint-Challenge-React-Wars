import React from 'react';
import Character from './Character';

const CharacterCard = props => {
    return(
        <div>
            {props.starwarsChars.map(currentChar => (
                <Character singleChar={currentChar}/>
            ))}
        </div>
    );

}

export default CharacterCard;