import React from 'react';

//== Character =================================================================

//-- Dependencies --------------------------------
import './StarWars.css';

//-- Implementation ------------------------------
function Character(props) {
    return (
        <div className="card-character">
            <h1>{props.character.name}</h1>
            <div className="card-stats">
                <span>​Name: {props.character.name}</span>
                <span>Birth Year: {props.character.birth_year}</span>
                <span>​Height: {props.character.height}</span>
                <span>​Mass: {props.character.mass}</span>
                <span>​Gender: {props.character.gender}</span>
                <span>​Skin Color: {props.character.skin_color}</span>
                <span>​Eye Color: {props.character.eye_color}</span>
                <span>​Hair Color: {props.character.hair_color}</span>
            </div>
        </div>
    )
}
/*
//​homeworld: "https://swapi.co/api/planets/1/"
//​films: Array(5) [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", … ]
//​species: Array [ "https://swapi.co/api/species/1/" ]
//​starships: Array [ "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/" ]
//​url: "https://swapi.co/api/people/1/"
//​vehicles: Array [ "https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/" ]
*/

//-- Export --------------------------------------
export default Character;
