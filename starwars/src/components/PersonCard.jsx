// import React, useEffect, and useState
import React, { useEffect, useState } from "react";
// import styled components
import styled from "styled-components";

const PersonCard = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h4>A little about "{props.name}"</h4>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Skin Color: {props.skinColor}</p>
            <p>Eye Color: {props.eyeColor}</p>
            <p>{props.birthYear}</p>
            <p>Gender: {props.gender}</p>
            <p>Films: {props.films.length}</p>
            <p>Starships: {props.starships.length}</p>
        </div>
    );
};

export default PersonCard;
