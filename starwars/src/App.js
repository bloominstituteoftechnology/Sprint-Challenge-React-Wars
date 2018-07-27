import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';

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
        this.setState({ starwarsChars: data.results,
          next: data.next,
          previous: data.previous});
        console.log(data);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  next = () => {
    this.getCharacters(this.state.next);
  };

  previous = () => {
    this.getCharacters(this.state.previous);
  };

   render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <div className="left-button" onClick={this.previous}>Previous</div>
          <div className="right-button" onClick={this.next}>Next</div>
        </div>
        <CharList charAttrib={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
