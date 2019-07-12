import React, { useState, useEffect} from 'react';
import './App.css';

const App = () => {
const [state, setState] = useState([])


  const getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setState(data.results);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  useEffect(() => getCharacters('https://swapi.co/api/people/'), [])

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  
}

export default App;
