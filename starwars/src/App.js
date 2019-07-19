import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import "semantic-ui-css/semantic.min.css";
import { WrapperDiv } from "./components/NewStyles";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starChar, setStarChar] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        console.log("promise", res);
        setStarChar(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log("test me", starChar);

  return (
    <WrapperDiv>
      <h1 className="Header">React Wars</h1>
      <CharacterCard characters={starChar} />
    </WrapperDiv>
  );
};

export default App;
