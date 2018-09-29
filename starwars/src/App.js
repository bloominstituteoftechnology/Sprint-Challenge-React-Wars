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
