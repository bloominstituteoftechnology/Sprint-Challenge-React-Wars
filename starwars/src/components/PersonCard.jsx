// import React, useEffect, and useState
import React from "react";
// import Styled Components
import styled from "styled-components";

const Card = styled.div`
    width: 30%;
    margin: 1%;
    position: relative;
    border-radius: 0.2rem;
    background-color: whitesmoke;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover {
        bottom: 0.5rem;
        background-color: white;
    }
`;

const PersonCard = props => {
    return (
        <Card>
            <h2>{props.name}</h2>
            <h5>A little about "{props.name}"</h5>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Skin Color: {props.skinColor}</p>
            <p>Eye Color: {props.eyeColor}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Gender: {props.gender}</p>
            <p>Films: {props.films}</p>
            <p>Starships: {props.starships}</p>
        </Card>
    );
};

export default PersonCard;
