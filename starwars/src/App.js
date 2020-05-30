import React, { useState, useEffect } from "react";
import axios from "axios";
import { Character } from "../src/components/Character";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #8B4513;
  font-size: 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const App = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/swapi.py4e.com/api/people")
      .then((response) => {
        console.log(response.data.results);
        setInfo(response.data.results);
      })
      .catch((error) => {
        console.log("HALT! THE FORCE IS NOT WITH YOU! NO ENTRY", error);
      });
  }, []);

  return (
    <div className="App">
       <Title className="Header">Star Wars Characters</Title>
      <Container>
        {info.map((characters, i) => (
          <Character props={characters} key={i} />
        ))}
      </Container>
    </div>
  );
};

export default App;