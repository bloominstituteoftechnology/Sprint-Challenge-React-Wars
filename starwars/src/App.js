import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import CharCards from "./components/CharCards"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsChar, setStarWarsChar] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then( resolve => {
      setStarWarsChar(resolve.data.results);
      console.log('setStarWarsChar:', resolve)
    })
    .catch(error => console.log('The starwar API is currently down, try again later', error));
  }, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {starWarsChar.map((people, index) => {
        return <CharCards key={index} people={people} />; 
      })}
    </div>
  );
}

export default App;
