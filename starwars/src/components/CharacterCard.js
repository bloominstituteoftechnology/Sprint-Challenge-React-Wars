import React from 'react';
import Character from './Character';
import './characterCard.css';

const CharacterCard = props => {
    return(
        <div className='character-card'>
            {props.starwarsChars.map((currentChar, index) => (
                <Character singleChar={currentChar} key={index}/>
            ))}
        </div>
    );

}

export default CharacterCard;