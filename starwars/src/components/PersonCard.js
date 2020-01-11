import React from "react";

const PersonCard = props => {
    return (
        <div className="person-card">
            <h2 className="name">Name: {props.name}</h2>
            <div className="height">
                <p>Height: {props.height}</p>
            </div>
            <div className="mass">
                <p>Mass: {props.mass}</p>
            </div>
            <div className="birth_year">
                <p>Birth Year: {props.birth_year}</p>
            </div>
        </div>
    )

};

export default PersonCard;