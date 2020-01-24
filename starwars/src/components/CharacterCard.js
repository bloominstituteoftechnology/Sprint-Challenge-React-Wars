import React from "react";
import styled from "styled-components";


const Card = styled.div`

    width: 30%;
    background: rgba(225,225,225, 0.7);
    padding: 4% 0;
    border: 1px solid grey;
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    font-size: 2rem;
`; 

const CharacterCard = props => {

  return (
    <Card>
      <h2>{props.name}</h2>
      <p>Year born: {props.birthyear}</p>
      <p>
        Height and weight: {props.height}cm, {props.mass}kg
      </p>
      <p>
        Attributes: {props.hair} hair, with {props.eyes} eyes
      </p>
      <p>Gender: {props.sex}</p>
    </Card>
  );
};

export default CharacterCard;