import styled from "styled-components"
import React, { useState, useEffect } from "react";
import axios from "axios"
import './App.css';
import Card from "./components/moviecard"

const App = () => {
  const [Characters, setCharacters] = useState ([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
        {Characters.map(character => {
          return <div>
            <Card 
          name = {character.name}
          height = {character.height}
          mass = {character.mass}
          hairColor = {character.hair_color}
          skinColor = {character.skin_color}
          eyeColor = {character.eye_color}
          birth = {character.birth_year}
          />
          </div>
        })}

      
    </div>
  );
}

export default App;
