import React from 'react';
import Character from './Character';
import './CharacterList.css';

const CharacterList = props => {
    return (
        <div className ="char-container">
            {props.charList.map( (charFromMap) => (
                <Character
                    charOnProps={charFromMap}
                />
            ))}
        </div>
    )
}

export default CharacterList;