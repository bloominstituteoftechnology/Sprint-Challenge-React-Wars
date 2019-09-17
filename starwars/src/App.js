import React from "react";
import "./styles/App.css";
import styled from "styled-components";

import GetChars from "./components/GetChars";

export default function App() {
  return (
    <>
      <Content className="App">
        <h1 className="Header">React Wars</h1>
        <GetChars />
      </Content>
    </>
  );
}

const Content = styled.div`
width: 100%
max-width: 1200px;
margin: 0 auto 5rem;
@media screen and (max-width: 400px) {margin-top: -2rem;}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`;
