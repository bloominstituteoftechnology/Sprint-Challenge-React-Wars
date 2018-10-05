import React from 'react';

const Card = (props) => {
    return (
        <div class="card">
            <h2 className="character-name">{props.char.name}</h2>
            <p><strong>Birth Year</strong>: {props.char.birth_year}</p>
            <p><strong>Gender</strong>: {props.char.gender}</p>
            <p><strong>Eye Color</strong>: {props.char.eye_color}</p>
            <p><strong>Hair Color</strong>: {props.char.hair_color}</p>
            <p><strong>Skin Color</strong>: {props.char.skin_color}</p>
            <p><strong>Mass</strong>: {props.char.mass}-kg</p>
            <p><strong>Height</strong>: {props.char.height}-cm</p>
            
        </div>
    )
 }

 
export default Card;
