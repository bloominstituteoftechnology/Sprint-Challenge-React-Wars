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
const H1 = styled.li`
  font-size: 1.8rem;
  margin-top: 100px;
`;

function StarWarsChar(props) {
  return (
    <StarWarsChars>
      <UL>
        <li>
          <H1>{props.char.name}</H1>
        </li>
        <li>Birth Year: {props.char.birth_year}</li>
        <li>Eye Color: {props.char.eye_color}</li>
        <li>Height: {props.char.height}</li>
        <li>Mass: {props.char.mass}</li>
      </UL>
    </StarWarsChars>
  );
}

export default StarWarsChar;
