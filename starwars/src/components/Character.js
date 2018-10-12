import React from 'react';

const Character = props => {

    return (

        <div>

            <h2>{props.character.name}</h2>
            <h3>Born: {props.character.birth_year}</h3>
            <h3>Race: {props.character.species}</h3>
            <h3>Skin Tone: {props.character.skin_color}</h3>
            <h3>Gender: {props.character.gender}</h3>
            <h3>Eye Color: {props.character.eye_color}</h3>
            <h3>Hair Color: {props.character.hair_color}</h3>
            <h3>Height (feet): ({props.character.height}/30.48)</h3>
            <h3>Weight (lbs): ({props.character.mass}*2.205</h3>
            <h3>Starships: {props.character.starships}</h3>
            <h3>Number of film appearances: {props.character.films.length}</h3>


        </div>   


    );

};


export default Character;