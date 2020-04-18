import React, {useState } from "react";

const Cards = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src = {props.image} />
            <p>{props.episode}</p>
            <p>{props.origin}</p>
            <p>{props.species}</p>
            <p>{props.type}</p>
        </div>
    );
};

export default Cards;