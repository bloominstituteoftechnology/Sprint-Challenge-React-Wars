import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

import Character from "./components/CharacterComponent";

const App = () => {
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

  const CardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
  `;

  // render() {}
  return (
    <div className="App">
      <h1 className="Header">React Wars - Ryan Mersmann</h1>
      <CardsContainer>
        {people.map(item => {
          return (
            <Character
              name={item.name}
              birth_year={item.birth_year}
              height={item.height}
              mass={item.mass}
              skin_color={item.skin_color}
              hair_color={item.hair_color}
              eye_color={item.eye_color}
              gender={item.gender}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
};

export default App;