import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';
import './components/StarWars.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Characters: []
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
        this.setState({ Characters: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters chars={this.state.Characters}/>
      </div>
    );
  }
}

export default App;
