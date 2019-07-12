import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
  margin: 2rem;
  padding: 1rem;
`;

export default function CharCard(props) {
  console.log(props.char);
  return (
    <Card className="character-card">
      <h2 className="heading">{props.char.name}</h2>
      <div className="stats">
        <h3>Stats</h3>
        <p>Born: {props.char.birth_year}</p>
        <p>Gender: {props.char.gender}</p>
        <p>Height: {props.char.height}</p>
        <p>Weight: {props.char.mass} kg</p>
      </div>
    </Card>
  );
}
