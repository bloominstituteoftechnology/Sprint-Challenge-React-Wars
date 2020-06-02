import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")

      .then((response) => {
        setCharacterData(response.data.results);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="cardHolder">
        <Cards data={characterData} />
      </div>
    </div>
  );
};

export default App;
