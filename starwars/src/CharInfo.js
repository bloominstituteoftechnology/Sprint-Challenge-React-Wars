import React from 'react'
const CharInfo = props => {
    return (
        <div className="CharacterWrapper">
            <h1 className="CharacterName">{props.characterData.name}</h1>
            <p className="Charstats">Birth Year: {props.characterData.birth_year}</p>
            <p className="CharStats">Eye Color:{props.characterData.eye_color}</p>
            <p className="CharStats">Gender:{props.characterData.gender}</p>
            <p className="CharStats">Mass:{props.characterData.mass}</p>
        </div>
    );
};

export default CharInfo;