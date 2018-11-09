import React from 'react';
import Character from './Character';
import './characterCard.css';

const CharacterCard = props => {
    return(
        <div className='character-card'>
            {props.starwarsChars.map(currentChar => (
                <Character singleChar={currentChar}/>
            ))}
        </div>
    );

}

export default CharacterCard;