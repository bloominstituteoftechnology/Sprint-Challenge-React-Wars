import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./views/CharacterList";

const App = () => {
  const [state, setState] = useState({
    characters: [],
    nextPage: null,
    previousPage: null
  });
  const getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setState({
          ...state,
          characters: data.results,
          nextPage: data.next,
          previousPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  useEffect(() => getCharacters("https://swapi.co/api/people/"), []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList characters={state.characters} />
    </div>
  );
};

export default App;
