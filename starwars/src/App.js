import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get("https://swapi.co/api/people/")
    .then(response =>{
      console.log(response.data.results);
      setData(response.data.results);
    })
    .catch(error =>{
      console.log("The data was not returned", error);
    } )
  },[])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(character =>{
        return(
      <CharacterCard 
      name = {character.name}
      birth = {character.birth_year}
      eyes = {character.eye_color}
      gender = {character.gender}
      hair = {character.hair_color}
      height = {character.height}
      mass = {character.mass}
      skin = {character.skin_color}
      home = {character.homeworld}
      films = {character.films}
      species = {character.species}
      starships = {character.starships}
      vehicles = {character.vehicles}
      />
      )})}
    </div>
  );
}

export default App;
