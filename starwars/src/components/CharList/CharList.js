import React from 'react';

const CharList  = (props) => {

    return (
        <div className="character-wrapper ">
            <h2>{props.name}</h2>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Gender: {props.gender}</p>
            <p>Skin Color: {props.skin_color}</p>
        </div>
    )

}

export default Charlist ; 