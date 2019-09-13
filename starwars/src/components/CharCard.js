import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 4px solid #054a91;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3),
    0 6px 20px 0 rgba(255, 255, 255, 0.3);
  width: 15rem;
  min-width: 300px;
  background-color: #81a4cd;
  margin: 1rem;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    box-shadow: none;
    border-radius: none;
  }

  h2 {
    background-color: #685369;
    color: #dddcd7;
    text-align: center;
    border-radius: 1px 1px 0px 0px;
    margin: 0;
    padding: 1rem;
    @media screen and (max-width: 400px) {
      width: 100%;
      border-radius: none;
    }
  }

  .stats {
    color: #b02e0c;
    border-radius: 0 0 5px 5px;
    padding: 1rem;
    font-weight: 700;
  }

  div:hover {
    background-color: black;
    color: white;
  }
`;

export default function CharCard(props) {
  console.log(props);
  return (
    <Card className="character-card">
      <h2 className="heading">{props.char.name}</h2>
      <div className="stats">
        <h3>Stats</h3>
        <p>Born: {props.char.birth_year}</p>
        <p>Gender: {props.char.gender}</p>
        <p>Height: {(props.char.height * 0.033).toFixed(1)} feet</p>
        <p>Weight: {(props.char.mass * 2.2).toFixed(1)} lbs</p>
      </div>
    </Card>
  );
}
