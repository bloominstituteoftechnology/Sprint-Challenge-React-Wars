import React, { Component } from 'react';
import './App.css';

import CharactersList from './components/CharactersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      count: '',
      next: '',
      previous: '',
    };
  }
//1. access the starwarsChar array
//2. use that access to access the count, next, previous
//3. make next button with onClick calls componentDidMount({this.state.starwarChars.next})
//4. previous button with onClick calls ^^ .previous
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
        console.log(data);
        console.log(data.count);
        console.log(data.next);
        console.log(data.previous);
        this.setState({
          starwarsChars: data.results,
          count: data.count,
          next: data.next,
          previous: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className='page-buttons'>
          <button>Previous Page</button>
          <button>Next Page</button>
        </div>
        <h1 className="Header">React Wars</h1>
        <CharactersList
          starwarsChars={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;

//1. Access the starwarsChars array
//2. Access each index to display
//3. Display each array
