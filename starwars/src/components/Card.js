import React from 'react';
import './StarWars.css';

const Card = (props)=>{
    return (
        <li className="card">
            <h2>{props.charData.name}</h2>
            <h3>Bio</h3>
            <div className="bio-info">
                <p>Gender: {props.charData.gender}</p>
                <p>Born: {props.charData.birth_year}</p>
                <p>Height: {props.charData.height}</p>
                <p>Weight: {props.charData.mass}</p>
                <p>Hair Color: {props.charData.hair_color}</p>
                <p>Eye Color: {props.charData.eye_color}</p>
                <p>Skin Color: {props.charData.skin_color}</p>
            </div>
        </li>
    )
}

export default Card;