import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters.js'
import CurrentCharacter from './components/CurrentCharacter'
import CharacterList from './components/CharacterList'

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
        
  showCurrentCharacter = name => {
    const currentCharacter = this.state.starwarsChars.find(char => char.name === name);
    console.log(currentCharacter);
    this.setState({ currentCharacter: currentCharacter });
  }

  returnToList = event => {
    this.setState({currentChar: null})
  }


  render() {
    if (this.state.currentChar === null) {
    return (
        
      
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList chars={this.state.starwarsChars} showCurrentChar={this.showCurrentChar}/>
      </div>
    );
  } else {
    return (
      <div className="container">
      < CharacterList 
      chars={this.state.starwarsChars} 
      currentChar={this.state.currentChar} />
      </div>
    )
  }
  }
}

export default App;
