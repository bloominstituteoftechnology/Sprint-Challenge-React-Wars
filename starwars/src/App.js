import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Buttons from './components/Buttons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      characterListLength: 5
    };
  }

  componentDidMount() {
    this.getCharacters(['https://swapi.co/api/people', 'https://swapi.co/api/people/?page=2', 'https://swapi.co/api/people/?page=3', 'https://swapi.co/api/people/?page=4', 'https://swapi.co/api/people/?page=5', 'https://swapi.co/api/people/?page=6', 'https://swapi.co/api/people/?page=7', 'https://swapi.co/api/people/?page=8']);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    const characters = [];
    let merged = [];
    let count = 0;

    URL.forEach(url => {
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          characters.push(data.results);
          merged = [].concat.apply([], characters);
          count++;
          if (URL.length === count) {
            addCharacters(merged);
          }
        })
        .catch(err => {
          throw new Error(err);
        });
    });

    const addCharacters = charactersArray => {
      this.setState({ starwarsChars: charactersArray });
    }  
  };

  showCharacter = length => {
    this.setState({ characterListLength: length});
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Buttons showCharacter={this.showCharacter} characterList={this.state.starwarsChars}/>
        <CharacterList characterList={this.state.starwarsChars} characterListLength={this.state.characterListLength} />
      </div>
    );
  }
}

export default App;
