import React from "react";
import styled from "styled-components";



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