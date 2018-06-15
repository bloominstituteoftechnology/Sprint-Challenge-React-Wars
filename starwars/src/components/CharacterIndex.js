import React from 'react';
import Characters from './Characters.js';

const CharacterIndex = props => {
    // let { starwarsChars, getCharacters } = this.props;

    return (
<div className="char-index">
    {props.starwarsChars.map(char => (
     <Characters 
            char={char}
            key={char.id}
            />
    ))}
</div>
    );
};

export default CharacterIndex;