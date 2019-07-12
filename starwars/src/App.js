import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./views/CharacterList";
import 'semantic-ui-css/semantic.min.css'


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
        console.log(data)
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
      <button onClick={() => getCharacters(state.previousPage)}>Previous</button>
      <button onClick={() => getCharacters(state.nextPage)}>Next</button>
    </div>
  );
};

export default App;
