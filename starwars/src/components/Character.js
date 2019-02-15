import React from 'react';
import './StarWars.css'

const Character = props => {
    return (
        <div className="character">
            <div className="profile">
                <h2>{props.character.name}</h2>
            </div>
            <div className="details">
                <ul>
                    <li><strong>Birth Year</strong>: {props.character.birth_year}</li>
                    <li><strong>Eye Color</strong>: {props.character.eye_color}</li>
                    <li><strong>Hair Color</strong>: {props.character.hair_color}</li>
                    <li><strong>Skin Color</strong>: {props.character.skin_color}</li>
                    {/* <ul>Ships: {props.character.starships.map(ship => {
                        return <li>{ship}</li>
                    })}</ul> */}
                </ul>
            </div>
        </div>
    );
}

export default Character;