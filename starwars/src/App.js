import React, { useState, useEffect } from "react";
import "./App.css";
import CharacterList from "./views/CharacterList";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [state, setState] = useState({
    characters: [],
    nextPage: null,
    previousPage: null,
    loading: false
  });
  const getCharacters = URL => {
    setState({...state, loading: true})
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setState({
          ...state,
          loading: false,
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
      <CharacterList characters={state.characters} loading={state.loading}/>

      <Button.Group>
        <Button disabled={state.previousPage === null ? true: false} onClick={() => getCharacters(state.previousPage)}>Previous</Button>
        <Button.Or />
        <Button disabled={state.nextPage === null ? true: false} onClick={() => getCharacters(state.nextPage)}>Next</Button>
      </Button.Group>

    </div>
  );
};

export default App;
