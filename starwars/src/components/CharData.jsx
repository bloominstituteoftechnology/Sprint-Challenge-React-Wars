import React from 'react';
import './StarWars.css';
import beru from './imgs/Beru.jpg';
import biggs from './imgs/Biggs.jpg';
import c3po from './imgs/C3PO.jpeg';
import leia from './imgs/Leia.jpg';
import luke from './imgs/Luke.jpg';
import obiwan from './imgs/Obiwan.jpg';
import owen from './imgs/Owen.jpg';
import r2d2 from './imgs/R2D2.jpg';
import r5d4 from './imgs/R5D4.jpeg';
import vader from './imgs/Vader.jpeg';


const Character = (props) => {
    let pics = [
      beru,
      biggs,
      c3po,
      leia,
      luke,
      obiwan,
      owen,
      r2d2,
      r5d4,
      vader
    ];

    return (
        <div className="character">
            <h2>{props.character.name}</h2>
            <img src={pics[props.id]} />
            <ul>
                <li>Gender: {props.character.gender}</li>
                <li>Height: {props.character.height}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Birth Year: {props.character.birth_year}</li>
                <li>Eye Color: {props.character.eye_color}</li>
                <li>Films: {props.character.films}</li>
                <li>Gender: {props.character.gender}</li>
                <li>Hair Color: {props.character.hair_color}</li>
                <li>Homeworld: {props.character.homeworld}</li>
                <li>Skin Color: {props.character.skin_color}</li>
                <li>Species: {props.character.species}</li>
                <li>Starships: {props.character.starships}</li>
                <li>Vehicles: {props.character.vehicles}</li>
            </ul>
        </div>
    );
}

export default Character;