import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import HeaderText from "./components/HeaderText";
import Wrapper from "./components/Wrapper";
import styled from "styled-components";



const theme ={
font: "Calibri"

}; 

export default () => (
    <ThemeProvider theme={theme}>
      <Wrapper>
      <HeaderText>Starwars</HeaderText>


      </Wrapper>

    </ThemeProvider>




)