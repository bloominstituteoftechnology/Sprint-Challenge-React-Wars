import React from "react";

const StarWarsCharacters = props => {
  <Card>
    <Name>Name: {props.name}</Name>
    <Info>Gender: {props.gender}</Info>
    <Info>Year Born: {props.birth_year}</Info>
    <Info>Hair Color: {props.hair_color}</Info>
    <Info>Eye Color: {props.eye_color}</Info>
    <Info>Skin Color: {props.skin_color}</Info>
  </Card>;
};

export default StarWarsCharacters;
