import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

const StyledButton = styled.button`
  border: 5px solid black;
  background-color: black;
  color: white;
  padding: 15px 32px;
  margin: 5px 10px 10px 5px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export default function NextPage (props) {

  return (
    <div className = "buttonWrapper">
      <StyledButton onClick= {() =>
        props.pageDown()
      }>
        Previous Page
      </StyledButton>
      <StyledButton onClick= {() =>
        props.pageUp()
      }>
        Next Page
      </StyledButton>
    </div>

  )
}
