import React from "react";
import styled from "styled-components";


const StyledCard = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

text-align:  center;
align-items: center;

margin: 0 auto;
padding: 3rem;
margin-bottom: 3rem;
max-width: 1000px;

background:linear-gradient(to right, #108dc7,#ef8e38);
transition: ease-in-out 0.2s;

color: ${props => props.inputColor || "#FF0000"};
font-size: 1.5rem;


&:hover {
  transform: scale()(0.9);
  transition: ease-in-out 0.11s;
  box-shadow: 0.3em 0.3em 0.3em #DECBA4;
  text-shadow: 0.5em 0.5em 0.5em #544a7d;
}

h2 {
  color:${props => props.inputColor ||  "#f4791f"};
  font-size: 3rem;
  margin-bottom: 3rem;
  text-decoration: underline;
}

h1 {
  text-align: center;
  margin: 0 auto;
  

}
`;



function CharacterCard(props) {
  console.log(props);
  return (
    <section className="character-card">
      <StyledCard>
      <h2>Name: {props.name}</h2>
      <div className="character">Height: {props.height}</div>
      <div className="character">Mass: {props.mass}</div>
      <div className="character">Eye: {props.eye}</div>
      <div className="character">Hair: {props.hair}</div>
      <div className="character">Skin: {props.skin}</div>
      <div className="character">Birth Year: {props.birth_year}</div>
      <div className="character">Gender: {props.gender}</div>
      <div className="character">Homeworld: {props.homeworld}</div>
      </StyledCard>
   
      
    </section>
  );
}

export default CharacterCard;
