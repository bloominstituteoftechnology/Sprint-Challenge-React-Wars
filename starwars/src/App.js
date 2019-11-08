import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import StarWarsCard from "./components/card"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsCharacter, setStarWars] = useState([]);
  useEffect(()=>{
  axios
    .get(`https://swapi.co/api/people`)
    .then(response => {
      const starWarsCharacter = response.data.results;
      console.log(starWarsCharacter);
      setStarWars(starWarsCharacter);
    })
  },[]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {starWarsCharacter.map(character => {
          return <StarWarsCard key={character.name} character={character}/>
        })}
      </div>
    </div>
  );
}

export default App;
