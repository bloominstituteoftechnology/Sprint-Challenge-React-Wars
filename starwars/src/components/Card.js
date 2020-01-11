import React from 'react';
import styled from 'styled-components'


const StyledDiv = styled.div`
    margin-bottom: 4%;
    background-color: #d85f29;
    border: solid black 2px;
    text-align: left;
    padding-left: 1%;
    width: 95%;
    margin-left: 1.5%;
    color: white;
`;

const StyledName = styled.h1`
    font-size: 40px;
    color: #0d273d;
`;

const Card = (props) => {

  return (
    <StyledDiv>
        <StyledName>{props.char.name}</StyledName>
        <h2>Birth Year: {props.char.birth_year}</h2>
        <h2>Eye Color: {props.char.eye_color}</h2>
        <h2>Gender: {props.char.gender}</h2>
        <h2>Hair Color: {props.char.hair_color}</h2>
        <h2>Height: {props.char.height}</h2>
        <h2>Mass: {props.char.mass}</h2>
        <h2>Skin Color: {props.char.skin_color}</h2>
        <h2>Homeworld: {props.char.homeworld}</h2>
        <h2>Url: {props.char.url}</h2>
        <h2>Created: {props.char.created}</h2>
        <h2>Edited: {props.char.edited}</h2>
    </StyledDiv>
  );
}

export default Card;
