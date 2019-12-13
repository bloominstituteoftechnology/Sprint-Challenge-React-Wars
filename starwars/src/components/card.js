import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    max-width: 350px;
    border: 1px solid black;
    harder-radius: 5px;
    overflow: hidden;
    box-shadow: 5px 5px 10px regba(0, 0, 0, 0.3);
    margin: 30px auto;
`;

const CharacterCard = props => {
  return (
    <div>
      <Card>

          <h2>Person Name: {props.name}</h2>
          <h3>Gender: {props.gender}</h3>
            <br /> 
          <p>Height: {props.height}cm</p>
          <p>Mass: {props.mass}kg</p>

      </Card>
    </div>
  );
};

export default CharacterCard; 