import React from 'react';
import './Dog.css';

const Card = (props) => {
    return (
        <div>
            <p>{props.dog}</p>
            {/* <p><strong>Birth Year</strong>: {props.dog.birth_year}</p>
            <p><strong>Gender</strong>: {props.dog.gender}</p>
            <p><strong>Eye Color</strong>: {props.dog.eye_color}</p>
            <p><strong>Hair Color</strong>: {props.dog.hair_color}</p>
            <p><strong>Skin Color</strong>: {props.dog.skin_color}</p>
            <p><strong>Mass</strong>: {props.dog.mass}-kg</p>
            <p><strong>Height</strong>: {props.dog.height}-cm</p>
            <p><strong>Created</strong>: {props.dog.created}</p>
            <p><strong>Modified</strong>: {props.dog.edited}</p> */}
        </div>
    )
}

export default Card;