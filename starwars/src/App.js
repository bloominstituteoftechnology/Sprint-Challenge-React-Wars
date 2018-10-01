import React, { Component } from 'react';
import './App.css';

import Character from './components/Character/Character';
import CharacterCard from './components/CharacterCard/CharacterCard';

import StarWarsChars from './StarWarsChars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <h1 className='Header'>REACTORS</h1>
        <div><h2>Characters from Science-Fiction and Super Hero Films</h2></div>
        <div className='Card-row'>
          <div className='Char-container'>
            {this.state.starwarsChars.map(char => <StarWarsChars key={char.name} char={char} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
