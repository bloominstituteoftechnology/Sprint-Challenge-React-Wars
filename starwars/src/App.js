import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';
import CharacterDisplayFull from './components/CharacterDisplayFull';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      activeChar: null,
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

  selectActiveCharacter = id => {
    this.setState({ activeChar: this.state.starwarsChars[id] });
  }

  deselectActiveCharacter = () => {
    this.setState({ activeChar: null })
  }

  render() {
    return (
      <div className="app-bg">
        <div className="app-container">
          {(this.state.activeChar === null) ?
            <CharacterList characters={this.state.starwarsChars} selectChar={this.selectActiveCharacter} /> :
            <CharacterDisplayFull character={this.state.activeChar} deselectChar={this.deselectActiveCharacter} /> }
        </div>
      </div>
    );
  }
}

export default App;
