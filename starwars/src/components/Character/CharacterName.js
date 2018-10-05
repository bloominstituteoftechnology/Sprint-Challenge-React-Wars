import React from 'react';

const CharacterName = props => {
    return (
        <div className="CharacterName">
            <h1>{props.character.name}</h1>
            <img src={props.characterImage} alt={props.character.name} />
        </div>
    );
}

export default CharacterName;