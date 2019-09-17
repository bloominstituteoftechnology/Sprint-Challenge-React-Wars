import React from "react";
import styled from "styled-components";

const StarWarsChars = styled.div`
  width: 40%;
  height: 300px;
  margin: 50px;
  color: white;
  background-color: #B6450D;
  border: 5px solid grey;
  border-radius:10%;
`;
const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-left: 40px;
`;
const H1 = styled.h1`
  font-size: 1.8rem;
  margin-top: 100px;
  
`;
const LI = styled.li``

function StarWarsChar(props) {
  return (
    <StarWarsChars>
      <UL>
        <li>
          <H1>{props.char.name}</H1>
        </li>
        <LI>Birth Year: {props.char.birth_year}</LI>
        <LI>Eye Color: {props.char.eye_color}</LI>
        <LI>Height: {props.char.height}</LI>
        <LI>Mass: {props.char.mass}</LI>
      </UL>
    </StarWarsChars>
  );
}

export default StarWarsChar;
