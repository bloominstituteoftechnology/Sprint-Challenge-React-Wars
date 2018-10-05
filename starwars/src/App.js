import React, { Component } from 'react';
import './App.css';
import Character from './components/character'
import Buttons from './components/buttons';

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

  displayCharacter = event => {
    event.preventDefault();
    // console.log(event.target);
    // let newState = this.state.starwarsChars.slice();
    // console.log(newState);    
    // newState = newState.filter(char => char.starwarsChars.name === char.target.name)
  }

  render() {
    return (
      <div className="container">  
        <h1>Choose Your Destiny</h1>    
        <div className="buttons">
          {this.state.starwarsChars.map((char,i) => <Buttons displayCharacter={this.displayCharacter} char={char} key={i} />)}  
        </div>
        <div className="cards">
          {this.state.starwarsChars.map((char,i) => <Character char={char} key={i} />)}
        </div>
      </div>      
    );
  }
}

export default App;
