import React from "react";
import Zoom from 'react-reveal/Zoom'
import styled from 'styled-components'
import '../../Animation.css'

const Card = styled.div`
  border: 1px solid #7e7a9b;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
  margin: 2rem;
  padding: 1rem;
`;

export default function CharacterCard(props) {
  console.log(props.char)
  return (
    <Zoom>
      < Card className="character-card">
      <h2 style={{fontSize: '3rem'}} className="heading floating">{props.char.name}</h2>
      <div className="stats">
        <h3 style={{color: '#7e7a8f'}} >Stats</h3>
        <p>Born: {props.char.birth_year}</p>
        <p>Gender: {props.char.gender}</p>
        <p>Height: {props.char.height}</p>
        <p>Weight: {props.char.mass} kg</p>
        <p>Skin: {props.char.skin_color}</p>
      </div>
    </Card>
    </Zoom>
  );
}