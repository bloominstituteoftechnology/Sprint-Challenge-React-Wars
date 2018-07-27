import React from "react";

const Card = props => {
    return <div
        key={props.charData.created}
        className="card-container"
    >
        <h4> {props.charData.name} </h4>
        <div>Birthdate: {props.charData.birth_year}</div>
        <div>Gender: {props.charData.gender}</div>
        <div>Height: {props.charData.height}</div>
        <div>Mass: {props.charData.mass}</div>
    </div>;
}

export default Card;