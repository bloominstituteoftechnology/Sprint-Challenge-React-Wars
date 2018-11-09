import React, { Component } from 'react';

import CharacterList from './components/CharacterList.js';
import AdvanceButton from './components/AdvanceButton.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextData: '',
      prevData: '',
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
        this.setState({ starwarsChars: data.results, nextData: data.next, prevData: data.previous });
        
      })
      .catch(err => {
        throw new Error(err);
      });
      
  };

  render() {
    return (
      <div className="App">
        <header >
          <AdvanceButton 
            getCharacters={this.getCharacters}
            destination={this.state.prevData}
          />
          <h1 className="Header">React Wars</h1>
          <AdvanceRutton 
            getCharacters={this.getCharacters}
            destination={this.state.nextData}
          />
        </header>
        <CharacterList 
          characterList={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
