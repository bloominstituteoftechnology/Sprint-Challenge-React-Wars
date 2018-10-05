import React, { Component } from 'react';
import './App.css';
import Character from './components/Character.js';

class App extends Component {
  state = {
    starwarsChars: [],
  };

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ starwarsChars: data.results });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="list-container">
          <div className="shadow-top" />
          <div className="shadow-left" />
          <div className="scroll-container">
            {this.state.starwarsChars.map((character) => {
              return <Character character={character} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
