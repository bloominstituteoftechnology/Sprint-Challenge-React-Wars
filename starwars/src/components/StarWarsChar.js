import React from "react";
import styled from "styled-components";


const StarWarsChars = styled.div`
width: 30%;
background-color: #e8bcbebd;
margin: 20px;
`
const UL = styled.ul`
list-style-type: none;
padding: 0;
`
const H1 = styled.li`
font-size: 1.8rem;
`


function StarWarsChar(props) {
  return (
    <StarWarsChars>
      <UL>
        <li><H1>{props.char.name}</H1></li>
        <li>Birth Year: {props.char.birth_year}</li>
        <li>Eye Color: {props.char.eye_color}</li>
        <li>Height: {props.char.height}</li>
        <li>Mass: {props.char.mass}</li>
      </UL>
    </StarWarsChars>
  );
}

export default StarWarsChar;
