import React from 'react';
import Character from './Character';

const DisplayCharacter = props => {
    return <ul>{props.starwarsChars.map((char) => <Character char={char} />)}</ul>
}

export default DisplayCharacter;