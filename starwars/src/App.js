import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''
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
        console.log(data)
        this.setState({ 
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextHandler = (event) => {
    event.preventDefault();
    this.getCharacters(this.state.next)
  }

  previousHandler = (event) => {
    event.preventDefault();
    this.getCharacters(this.state.previous)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList value={this.state.starwarsChars} />
        <button className={this.state.previous ? null : "hide" }  onClick={this.previousHandler}>Previous</button>
        <button className={this.state.next ? null : "hide" } onClick={this.nextHandler}>Next</button>
      </div>
    );
  }
}

export default App;
