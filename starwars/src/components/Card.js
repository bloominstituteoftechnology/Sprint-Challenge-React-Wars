import React from "react";

import "./StarWars.css";

const Card = props => {
    let tag = (props.current) ? "card current" : "card";
    return (
        <div className={tag}>
        
            <h2>{props.item.name}</h2>
            <p>
                <strong>Skin:</strong> {props.item.skin_color} &bull; <strong>Hair:</strong> {props.item.hair_color} &bull; <strong>Eyes:</strong> {props.item.eye_color}
            </p>
            <p>
                <strong>Mass:</strong> {props.item.mass}kg &bull; <strong>Height:</strong> {props.item.height}cm
            </p>
            <p>
                <strong>Birth Year:</strong> {props.item.birth_year}
            </p>
        </div>
    );
}

export default Card;