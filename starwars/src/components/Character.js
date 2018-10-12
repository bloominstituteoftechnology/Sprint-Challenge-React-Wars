import React from 'react';

const Character = props => {

    return (

        <div>
            {props.starwarsChars.map((name, i) => {
                return <li key= {i+1} >{name}</li>}
            )}
            <h2>{props.starwarsChars.name}</h2>
            <h3>Born: {props.starwarsChars.birth_year}</h3>
            <h3>Race: {props.starwarsChars.species}</h3>
            <h3>Skin Tone: {props.starwarsChars.skin_color}</h3>
            <h3>Gender: {props.starwarsChars.gender}</h3>
            <h3>Eye Color: {props.starwarsChars.eye_color}</h3>
            <h3>Hair Color: {props.starwarsChars.hair_color}</h3>
            <h3>Height (feet): ({props.starwarsChars.height}/30.48)</h3>
            <h3>Weight (lbs): ({props.starwarsChars.mass}*2.205</h3>
            <h3>Starships: {props.starwarsChars.starships}</h3>
            <h3>Number of film appearances: {props.starwarsChars.films}</h3>

        </div>   


    );

};


export default Character;