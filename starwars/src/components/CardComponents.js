import React from 'react';
import './StarWars.css';



const Card = (props) => {
    return(
        <div className="card">
            <div className="card__front">
                <h1>Name: {props.name}</h1>
                <h4>Gender: {props.gender} </h4>
                <h4>Mass: {props.mass} </h4>
            </div>
            <div className="card__back">
                <h4>height: {props.height} </h4>
                <h4>Eye color: {props.eye_color} </h4>
                <h4>Birth year: {props.birth_year} </h4>
                <h4>Skin color: {props.skin_color} </h4>
            </div>
        </div>
    )
}

export default Card;