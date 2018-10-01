import React from 'react';
import CharacterInfo from './CharacterInfo.js';
 const CharacterCard = props => {
    return (
        <div className="character-card">
            {props.starwarsChars.map(info => <CharacterInfo info={info} key={info.name} />)}
        </div>
        
    );
}
 export default CharacterCard;