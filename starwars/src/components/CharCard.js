import React from "react";
// import styled from 'styled-components'

export default function CharCard(props) {
  console.log(props.char);
  return (
    <div className="character-card">
      <h2 className="heading">{props.char.name}</h2>
      <div className="stats">
        <h3>Stats</h3>
        <p>Born: {props.char.birth_year}</p>
        <p>Gender: {props.char.gender}</p>
        <p>Height: {props.char.height}</p>
        <p>Weight: {props.char.weight}</p>
      </div>
    </div>
  );
}
