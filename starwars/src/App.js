import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import Character from './Character/Character';
import CharacterCard from './CharacterCard/CharacterCard';

import StarWarsChars from './StarWarsChars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  // { TRY FETCH to grab values from https://swapi.co/api/planets/1/  store in variables }
  render() {
    return (
      
      <div className="App">
        <h1 className="Header">REACTORS</h1>
        <div><h2>Characters from Science-Fiction and Super Hero Films</h2></div>
        <div className="Card-row">
          <div className="Char-container">
            {this.state.starwarsChars.map(char => <StarWarsChars key={char.name} char={char} />)}
          </div>
            
        </div>
      </div>
    );
  }
}

export default App;
