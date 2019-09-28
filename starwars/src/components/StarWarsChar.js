import React from "react";
import styled from "styled-components";



  const UL = styled.ul`
  list-style-type: none;
  padding-bottom: 5%;
  `;

  const H1 = styled.li`
  font-size: 1.8rem;
  font-weight: strong;
  margin-top: 100px;
  `;

  const StarWarsChars = styled.div`
  width: 33%;
  height: fit-content;
  padding-bottom: 5%;
  background-color: orange;
  color: black;
  border: none;
  border-radius: 15px;
  margin: 3%;
  opacity: 0.4;
  
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