import React from 'react';
import './StarWars.css'


const CharacterCard = props =>{
    return(
        <li className="character">
            <div className="list">
                <h1>Name: {props.name}</h1>
                <h1>Gender: {props.gender}</h1>
                <h1>Birth Year: {props.birth_year}</h1>
                <h1>Hair Color: {props.hair_color}</h1>
                <h1>Eye Color: {props.eye_color}</h1>
            </div>
        </li>
    )
}

export default CharacterCard;