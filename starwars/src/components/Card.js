import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
width: 30%;
padding: 2%;
background-color: purple;
border-radius: 8px;
box-sizing: border-box;
margin: 20px 0;
`

const Card =({name, ancestry})=>{
    return (
      <Container>
        <h2>{name}</h2>
        <h3>{ancestry}</h3>
        
      </Container>
    );
  };
export default Card;