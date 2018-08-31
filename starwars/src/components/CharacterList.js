import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    return (
        <div>
            {props.chars.map (char => (
                <CharacterCard key={char.created} char={char} />
            ))}
        </div>
    )
}

export default CharacterList;