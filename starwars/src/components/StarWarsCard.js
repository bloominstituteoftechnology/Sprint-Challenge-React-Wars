import React from "react";

function StarWarsCard(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default StarWarsCard;