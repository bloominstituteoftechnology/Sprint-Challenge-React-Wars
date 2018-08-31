import React from 'react';
import './Card.css'

const Card = props => {
    return (
        <div className="card">
        <div><p><strong>Name:</strong></p><p className="prop"> {props.card.name}</p></div>
        <div><p><strong>Birth Year:</strong></p><p className="prop"> {props.card.birth_year}</p></div>
        <div><p><strong>Created:</strong></p><p className="prop"> {props.card.created}</p></div>
        <div><p><strong>Edited:</strong></p><p className="prop"> {props.card.edited}</p></div>
        <div><p><strong>Eye Color:</strong></p><p className="prop"> {props.card.eye_color}</p></div>
        <div><p><strong>Gender:</strong></p><p className="prop"> {props.card.gender}</p></div>
        <div><p><strong>Hair Color:</strong></p><p className="prop"> {props.card.hair_color}</p></div>
        <div><p><strong>Height:</strong></p><p className="prop"> {props.card.height}</p></div>
        <div><p><strong>Mass:</strong></p><p className="prop"> {props.card.mass}</p></div>
        <div><p><strong>Skin Color:</strong></p><p className="prop"> {props.card.skin_color}</p></div>
        </div>
    )
}

export default Card;