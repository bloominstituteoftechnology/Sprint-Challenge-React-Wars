import React from 'react';
import DisplayCard from './DisplayCard';

function CharacterDisplay(props) {
    return <ul>{props.starwarsChars.map(item => <DisplayCard character={item} />)}</ul>
}

 export default CharacterDisplay; 