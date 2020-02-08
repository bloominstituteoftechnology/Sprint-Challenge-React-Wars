import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCharacters from "./components/StarWarsCharacters.js/index.js.js";
import "./App.css";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.log("The force is NOT with you!", error));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="Characters">
        <Card />
      </div>
      {/* {console.log(characters)} */}
    </div>
  );
};

// ran out of time; double check if line 28 and 29 are correct.  continue

export default App;
