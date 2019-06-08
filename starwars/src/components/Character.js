import React from 'react';

const Character = (props) => {
    return (
        <div className="character">
            <h2>{props.character.name}</h2>
            <div className="traits">
                <p>Race: {props.character.race}</p>
                <p>Gender: {props.character.gender}</p>
                <p>Birth Planet: {props.character.planet}</p>
                <p>Specialty: {props.character.specialty}</p>
            </div>
        </div>
    )
}

export default Character;