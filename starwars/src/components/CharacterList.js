import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
        {props.characters.map(characters =>
            <Character 
                name = {characters.name}
            />
        )}
        </div>
    )
}

export default CharacterList