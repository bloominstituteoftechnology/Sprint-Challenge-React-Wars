import React from 'react';
import Characters from './Characters.js';
import './StarWars.css';

const CharacterIndex = props => {
    // let { starwarsChars, getCharacters } = this.props;

    return (
<div className="char-index">{props.chars.map(char => <Characters key={char.name} swChar={char} />
    )}
</div>
    );
};

export default CharacterIndex;