import React from 'react';

function CharacterTraits(props) {
    return (
        <div className="character-card">
            <h2>{props.traits.name}</h2>
            <p>{props.traits.birth_year}</p>
            <p>{props.traits.eye_color}</p>
            <p>{props.traits.hair_color}</p>
            <p>{props.traits.height}</p>
            <p>{props.traits.mass}</p>
        </div>
    );
}

export default CharacterTraits;