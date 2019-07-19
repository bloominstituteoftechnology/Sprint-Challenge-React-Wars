import React from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 300px;
  background-color: white;
  margin: 30px;
  flex-direction: column;
  border-radius: 25px;
  padding-bottom: 20px;
`;
const Header = styled.div`
  background-color: gray;
  color: white;
  padding: 20px;
  border-radius: 25px 25px 0px 0px;
`;

function StarWarsCard(props) {
  return (
    <div className="characters">
      <Body>
        <Header>
          <h2>Name: {props.name}</h2>
        </Header>
        <p>Gender: {props.gender}</p>

        <p>Eye-Color: {props.eye}</p>
        <p>Hair-Color: {props.hair}</p>
        <p>Height: {props.height}cm</p>
        <p>Mass: {props.mass}kg</p>
        <p>Skin Color: {props.skin}</p>
        <p>Birth Year: {props.birth}</p>
      </Body>
    </div>
  );
}

export default StarWarsCard;
