import React from "react";
import styled from "styled-components";
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: lightgray;
color: white;
width: 200px;
max-height: 300px;
margin: 5%;
padding: 1%;
opacity: 45%;

`

const CharacterCard = props => {
    return (
        <Card>
<h1>{props.name}</h1>
<h2>{props.birth}</h2>
<h2>{props.eyes}</h2>
<h2>{props.gender}</h2>
<h2>{props.hair}</h2>
<h2>{props.height}</h2>
<h2>{props.mass}</h2>
<h2>{props.skin}</h2>
<h2>{props.home}</h2>
<h2>{props.films}</h2>
<h2>{props.species}</h2>
<h2>{props.starships}</h2>
<h2>{props.vehicles}</h2>
        </Card>

    );
};

export default CharacterCard