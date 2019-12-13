// Import React, useEffect, and useState
import React from "react";
// Import Styled Components
import styled from "styled-components";

const Card = styled.div`
    width: 30%;
    margin: 1%;
    color: yellow;
    padding: 2rem 0;
    position: relative;
    border-radius: 0.5rem;
    background-color: #111;
    border: solid 3px yellow;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover {
        bottom: 0.5rem;
        text-shadow: 0px 2px 2px rgba(255, 255, 0, 0.5);
    }
`;

const PersonCard = props => {
    return (
        <Card>
            <h2>{props.character.name}</h2>
            <h5>A little about "{props.character.name}"</h5>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Hair Color: {props.character.hairColor}</p>
            <p>Skin Color: {props.character.skinColor}</p>
            <p>Eye Color: {props.character.eyeColor}</p>
            <p>Birth Year: {props.character.birthYear}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Films: {props.character.films.length}</p>
            <p>Starships: {props.character.starships.length}</p>
        </Card>
    );
};

export default PersonCard;
