import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

import PersonContainer from "./components/PersonComponent";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log("outside", people);

  const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
    margin: 0 auto;
  `;
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <AppContainer>
        {people.map(item => {
          return (
            <PersonContainer
              name={item.name}
              height={item.height}
              mass={item.mass}
              hair_color={item.hair_color}
              skin_color={item.skin_color}
              eye_color={item.eye_color}
              birth_year={item.birth_year}
              gender={item.gender}
            />
          );
        })}
      </AppContainer>
    </div>
  );
};

export default App;
