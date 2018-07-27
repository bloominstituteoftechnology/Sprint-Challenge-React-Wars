import React from "react";
import './StarWars.css';

const Card = props => {
    return (
        <div className="cardContainer">
            {props.children}
        </div>
    );
}