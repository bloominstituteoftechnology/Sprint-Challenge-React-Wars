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
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    if(URL===null)return '';

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data.results.length)
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

  next = () => {
    this.getCharacters(this.state.next)
  }
  previous = () => {
    this.getCharacters(this.state.previous)
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        
        <button onClick={this.previous}>Previous</button>
        <button onClick={this.next}>Next</button>
        
        <CharacterList starwarsChars={this.state.starwarsChars}/>
        
      </div>
    );
  }
}

export default App;
