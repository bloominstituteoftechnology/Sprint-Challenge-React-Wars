import React from 'react';

function CharacterTraits(props) {
    return (
        <div className="character-card">

            <h2>{props.traits.name}</h2>
            <div>{props.traits.birth_year}</div>
            <div>{props.traits.eye_color}</div>
            <div>{props.traits.hair_color}</div>
            <div>{props.traits.height}</div>
            <div>{props.traits.mass}</div>
        </div>
    );
}

export default CharacterTraits;