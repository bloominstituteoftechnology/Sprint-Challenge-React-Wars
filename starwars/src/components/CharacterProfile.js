import React from 'react';

const CharacterProfile = (props) => {
    return (
        <div>
            <li className="character-profile" key={props.name}></li>
            <h2>Name: {props.name}</h2>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Homeworld: {props.homeworld}</p>
        </div>
    )
};

export default CharacterProfile;