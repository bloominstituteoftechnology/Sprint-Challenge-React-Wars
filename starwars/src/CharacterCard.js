import React from "react";
import styled from "styled-components";
const Card = styled.div`
display: inline-block;
background: lightgray;
color: black;
width: 25%;
max-height: 300px;
margin:5%;
padding: 15px 5px;
opacity: 45%;
overflow: hide;
line-height: 1rem;
box-shadow: 3px 3px 1px black;
`;
const H2Style = styled.h2`
line-height: 2rem;
`

const CharacterCard = props => {
    return (
        <Card>
<H2Style>Character: <br/> {props.name}</H2Style>
<p>Character born: {props.birth}</p>
<p>Character gender: {props.gender}</p>
<p>Character hair: {props.hair}</p>
<p>Character height: {props.height}</p>
<p>Character mass: {props.mass}</p>
<p>Character skin: {props.skin}</p>
        </Card>

    );
};

export default CharacterCard