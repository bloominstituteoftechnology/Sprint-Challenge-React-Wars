import React, { Component } from 'react';
import './App.css';
import CharsList from "./components/CharsList";
import Pagination from "./components/Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous:null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    console.log(`URL: `,URL);
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.table(data);
        this.setState({ 
          starwarsChars: data.results,
          next: data.next,
          previous:data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

getNextChars = () => {
  //debugger;
  this.getCharacters(this.state.next);
};
getPreviousChars = () => {
  this.getCharacters(this.state.previous);
};
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination
          next={this.state.next}
          previous={this.state.previous}
          getNext={this.getNextChars}
          getPrevious={this.getPreviousChars} 
          />
        <CharsList chars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
