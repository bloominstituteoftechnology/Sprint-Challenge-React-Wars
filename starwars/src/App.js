import React, { Component } from 'react';
import './App.css';
import  CharacterListed from './components/CharacterListed.js';
import CharacterForm from './components/CharacterForm.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [], //create an empty array
      starWarsCharacter: "" //when character is typed it will go to empty array
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
        this.setState({ getCharacters: data.results }); //..how is this not being used? was starwarsChars
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  addCharacter = event => { //This is how we are adding the typed characters to the array
    event.preventDefault();
    const starwarsChars = this.state.starwarsChars.slice();
    starwarsChars.push({ character: this.state.StarWarsCharacter, read: false, id: Date.now() }); //we need to add a condition true or false
  };

  changeCharacter = event => this.setState({ [event.target.name]: event.target.value });

  toggleCharacterComplete = id => { //toggle maker, 
    let starwarsChars = this.state.starwarsChars.slice();
    starwarsChars = starwarsChars.map(StarWarsCharacter => {
      if (this.getCharacters.id === id) { // if typed id  === object id? StarWarsCharacter instead of getCharacter?
        StarWarsCharacter.completed = !StarWarsCharacter.completed;
        return StarWarsCharacter;
      } else {
      return StarWarsCharacter;
      }
    });
  };

 clearCharacter = event => { //this clears the results...still not grabbing the character data..
   event.preventDefault();
    clearInterval(this.getCharacters);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterListed
          handleCharacterChange={this.toggleCharacterComplete}
          starwarsChars={this.state.starwarsChars}
        />
        <CharacterForm
          value={this.state.StarWarsCharacter}
          handleCharacterChange={this.changeCharacter}
          handleAddCharacter={this.addCharacter}
          handleClearCharacter={this.clearCharacter}
        />
      </div>
    );
  }
}

export default App;
