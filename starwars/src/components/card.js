import React  from 'react';

const Card = props => {

    return (
        <div className="card">
            <h2>{props.characterInfo.name}</h2>
            <h3>Personal Information</h3>
            <p>Name: {props.characterInfo.starwarsChars.name}</p>
            <p>Year of Birth: {props.characterInfo.starwarsChars.birth_year}</p>
            <p>Gender: {props.characterInfo.starwarsChars.gender}</p>
            <p>Height: {props.characterInfo.starwarsChars.height}cm</p>
            <p>Mass: {props.characterInfo.starwarsChars.mass}kg</p>
            <p>Skin Color: {props.characterInfo.starwarsChars.skin_color}</p>
            <p>Hair Color: {props.characterInfo.starwarsChars.hair_color}</p>
            <p>Eye Color: {props.characterInfo.starwarsChars.eye_color}</p>
        </div>
    );
};


export default Card;