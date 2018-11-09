import React from 'react';
import Character from './StarwarsCharacter';

const CharacterList = props => {
    return (
        <div className="container">
            {props.starwarsChars.map(characterInMap => (
                <Character
                    key={characterInMap.created}
                    characterOnProps={characterInMap}
                     />
            ))}
        </div>
    )
}

export default CharacterList;