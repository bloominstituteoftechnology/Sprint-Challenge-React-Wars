import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';
import CharacterDisplayFull from './components/CharacterDisplayFull';
import FontMenu from './components/FontMenu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      fonts: [
        {font: 'coruscant-common', active: true, display: 'Coruscant Common',},
        {font: 'aurebesh', active: false, display: 'Aurebesh',},
        {font: 'mandalorian', active: false, display: 'Mandalorian',},
        {font: 'sith', active: false, display: 'Sith',},
      ],
      activeChar: null,
      activeFont: 'coruscant-common',
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

  selectFont = font => {
    this.setState({activeFont: font})
  }

  render() {
    return (
      <div className="app-bg">
        <div className={`app-container ${this.state.activeFont}`}>
          <FontMenu fonts={this.state.fonts} selectFont={this.selectFont} />
          {(this.state.activeChar === null) ?
            <CharacterList characters={this.state.starwarsChars} selectChar={this.selectActiveCharacter} /> :
            <CharacterDisplayFull character={this.state.activeChar} deselectChar={this.deselectActiveCharacter} /> }
        </div>
      </div>
    );
  }
}

export default App;
