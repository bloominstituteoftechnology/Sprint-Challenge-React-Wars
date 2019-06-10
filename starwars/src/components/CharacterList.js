import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.starwarsChars.map( characterInMap => (
                <Character key={characterInMap.name}
                characterOnProps={characterInMap}/>
            ))};
        </div>
    );
};

export default CharacterList;