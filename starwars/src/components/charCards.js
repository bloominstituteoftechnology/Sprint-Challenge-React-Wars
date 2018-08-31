import React from 'react';

const charCards = (props) => {
    return (
        <div class = "cards">
            <h1>Name: {props.attribute.name}</h1>
            <h2>Height: {props.attribute.height}</h2>
            <h2>Mass: {props.attribute.mass}</h2>
            <h2>Hair Color: {props.attribute.hair_color}</h2>
            <h2>Eye Color: {props.attribute.eye_color}</h2>
            <h2>Birth Year: {props.attribute.birth_year}</h2>
            <h2>Gender: {props.attribute.gender}</h2>
        </div>
    );
};

export default charCards;