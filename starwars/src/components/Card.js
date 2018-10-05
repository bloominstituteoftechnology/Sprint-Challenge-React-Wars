import React from "react";

import "./StarWars.css";

const Card = props => {
    return (
        <div className="card">
            <h2>{props.name}</h2>
        </div>
    );
}

export default Card;