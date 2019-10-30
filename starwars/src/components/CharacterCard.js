import React from 'react';

const CharacterCard = props => {
    return (

        <div>
            <h1>Name: {props.data.name}</h1>
            <h2>Birthplace: {props.data.homeworld}</h2>
            <p>DOB: {props.data.birth_year}</p>
            <p>Skin Color: {props.data.skin_color}</p>
            <p>Eye Color: {props.data.eye_color}</p>
            <p>Height: {props.data.height}</p>
            <p>Weight: {props.data.height}</p>
        </div>


    );
};

export default CharacterCard; 