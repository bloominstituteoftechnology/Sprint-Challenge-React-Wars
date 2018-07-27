import React, { Component } from 'react';
import './App.css';
import Character from './components/Character/character';
import CharacterCard from './components/CharacterCard/CharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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

  selectedCharacter = (character) => {
    this.setState ({
      selectedCharacter: character
    });
  }





  render() {
    return (
      <div className="App">
          <div className="main">
          <h1 className="Header">React Wars</h1>
          <div className="characters">
            {this.state.starwarsChars.map(character => { 
              return <Character
              key={character.name}
              character={character}
              selectCharacter={this.selectedCharacter}
              
              />
            })}
          </div>
        </div>
        <div className="character-information">
          <h1>Star Wars Character Information</h1>
            {this.state.starwarsChars.map(character => {
              return <CharacterCard
                key={character.name}
                text={character.birth_year}
                selected={character === this.state.selectedCharacter}
              />
            })}


        </div>
      </div>
    );
  }
}

export default App;
