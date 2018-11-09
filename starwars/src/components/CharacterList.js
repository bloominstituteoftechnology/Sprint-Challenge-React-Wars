import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.charList.map( (charFromMap) => (
                <Character
                    charOnProps={charFromMap}
                />
            ))}
        </div>
    )
}

export default CharacterList;