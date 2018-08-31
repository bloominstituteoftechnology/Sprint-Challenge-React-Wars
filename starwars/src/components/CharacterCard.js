import React from 'react';
import CharacterInfo from './CharacterInfo.js';

const CharacterCard = props => {
    return (
        <div>
            {props.value.map(info => <CharacterInfo info={info} key={info.name} />)}
        </div>
        
    );
}


export default CharacterCard;