import React from "react";
import styled from "styled-components";

export default function Yolo(props) { 
  return (

    <StyledWrap>
      
    <h1>{props.name} </h1>
      <p>
      Mass: {props.mass}  <br />
      Height: {props.height}  <br />
      Gender: {props.gender}  <br />
      Birth Year: {props.year}  <br />
      Skin Color: {props.skin_color}  <br />
      </p>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
    width: 200px;
    height: 200px;
    background-color: red;
    margin: 20px;
`

