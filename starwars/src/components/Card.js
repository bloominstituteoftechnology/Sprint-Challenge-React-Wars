import React, {Component} from 'react';
import styled from 'styled-components';

const Card = styled.div `

border: 1px solid rgba(0,0,0, .1);
background:rgba(216,199,179, .9);
box-shadow: 0px 0px 10px 5px rgba(0,0,0,.1);
border-radius: 10px;
display:inline-flex;
margin: 20px;
width:20%;
justify-content:center;
// font-weight:bold;
text-shadow: 2px 2px 2px #fff;
`;

const Info = styled.div `

    h2 {
        color:white;
        text-shadow: 2px 2px 2px #000;
    }
`;

const CharacterCard = props => {
    return (
        <Card key={props.id}>
            <Info>
          <h2>{props.name}</h2>
          <p>Height: {props.height}</p>
          <p>Mass: {props.mass}</p>
          <p>Hair Color: {props.hair_color}</p>
          <p>Skin Color: {props.skin_color}</p>
          <p>Eye Color: {props.eye_color}</p>
          <p>Birth Year: {props.birth_year}</p>
          <p>Gender: {props.gender}</p>
          <p>Films: {props.films}</p>
          <p>Creadted: {props.created}</p>
          </Info>
        </Card>
    );     
};
  
  export default CharacterCard;





   