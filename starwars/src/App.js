import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import StarWarsChar from "./components/StarWarsChar";
import "./App.css";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const App = () => {
  const [starWarschar, setStarWarsChar] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(resp => {
      setStarWarsChar(resp.data.results);
      console.log(resp.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1>React Wars</h1>
      <h1>React Wars - Star Wars</h1>
      <Div>
        {starWarschar.map(char => {
          return <StarWarsChar char={char} key={char.name} />;
        })}
      </Div>
    </div>
  );
};

export default App;
