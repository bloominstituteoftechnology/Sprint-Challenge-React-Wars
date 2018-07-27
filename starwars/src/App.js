import React, { Component } from 'react';
import './App.css';
import Character from './components/Character/character';
import CharacterCard from './components/CharacterCard/CharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      allStarwarsChars: [],
      selectedCharacter: null,
      search: ""
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
        this.setState({ 
          starwarsChars: data.results,
          allStarwarsChars: data.results
        });
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

handleSearch = (event) => {
  this.setState ({
    search: event.target.value,
    starwarsChars: this.state.allStarwarsChars.filter((character) => 
      new RegExp(event.target.value, "i").exec(character.name))
  });
}



  render() {
    return (
      <div className="App">
          <div className="main">
          <div className="sear-bar">
          <input 
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}
            />
            </div>
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
                // Profile picture will do later
                name={character.name}
                birthday={character.birth_year}
                eyeColor={character.eye_color}
                gender={character.gender}
                height={character.height}
                mass={character.mass}
                hairColor={character.hair_color}
                skinColor={character.skin_color}

                selected={character === this.state.selectedCharacter}
              />
            })}


        </div>
      </div>
    );
  }
}

export default App;
