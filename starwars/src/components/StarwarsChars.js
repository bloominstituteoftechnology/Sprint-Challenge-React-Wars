import React from 'react';
import Character from './Character';

const StarwarsChars = props => {
    return (
        <div>
            {props.characters.map(character => <Character key={character.name} char={character} />)}
        </div>
    )
};
export default StarwarsChars;