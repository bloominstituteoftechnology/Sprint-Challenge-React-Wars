import React from 'react';

const CharacterDetails = props => {
    return (
        <div className="custom-card">
            <h1>{props.character.name}</h1>
            <p><strong>Birth Year: </strong>{props.character.birth_year}</p>
            <p><strong>Gender: </strong>{props.character.gender}</p>
            <p><strong>Height: </strong>{props.character.height}</p>
            <p><strong>Mass: </strong>{props.character.mass}</p>
            <p><strong>Hair Color: </strong>{props.character.hair_color}</p>
            <p><strong>Eye Color: </strong>{props.character.eye_color}</p>
            <p><strong>Skin Color: </strong>{props.character.skin_color}</p>
        </div>
    );
}

export default CharacterDetails;