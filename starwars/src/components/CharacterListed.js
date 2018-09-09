import React from 'react';
import Characters from './Characters.js';

function CharacterList(props) {
    return <ul> {props.starwarsChars.map(characters => 
        <Characters key={characters.value} starwarsChars={characters} />)} </ul>;
}
    export default CharacterList;