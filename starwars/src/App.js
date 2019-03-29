import React, { Component } from 'react';
import CardHolder from './components/CardHolder.js';
import Paginator from './components/Paginator.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: null,
      previousPage: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getPage = direction => {
    if (direction === "next" && this.state.nextPage != null) {
      this.getCharacters(this.state.nextPage);
    } else if (direction === "prev" && this.state.previousPage != null) {
      this.getCharacters(this.state.previousPage);
    }
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
          nextPage: data.next,
          previousPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Paginator pageHandler={this.getPage} />
        <CardHolder characters={this.state.starwarsChars} />
        <Paginator pageHandler={this.getPage} />
      </div>
    );
  }
}

export default App;
