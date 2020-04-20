import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import styled from 'styled-components';

const CharactersWrapper = styled.div`
  display:flex;
  justify-content:space-around;
  max-width:1080px;
  margin:0 auto;
  flex-wrap: wrap;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Initialize state to hold the image URL
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://swapi.py4e.com/api/people")
      // Which we then set to state
      .then(res => {
        setCharacters(res.data.results)
      })
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  console.log(characters)  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharactersWrapper>
      {characters.map(character => (
        <Character {...character}/>
      ))} 
      </CharactersWrapper>
    </div>
  );
}

export default App;
