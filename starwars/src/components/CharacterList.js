import React from 'react';

const CharacterList = props => {
    return (
        <div className="character">
            <p className="charactername">
                <strong>{props.character.name}</strong>
            </p>
            <p>
                Birth Year: {props.character.birth_year}
            </p>
            <p>
                Gender: {props.character.gender}
            </p>
            <p>
                Hair Color: {props.character.hair_color}
            </p>
            <p>
                Eye Color: {props.character.eye_color}
            </p>
            <p>
                Height: {props.character.height}
            </p>
            <p>
                Mass: {props.character.mass}
            </p>
        </div>
    )
}

export default CharacterList;