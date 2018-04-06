import React, { Component } from 'react';
import profilePictures from './profilePictures.js';
import { MainDisplay } from './MainDisplay/MainDisplay.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      charactersWithImg: []
    };
  }

  componentDidMount() {
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    let copy = {...this.state};
    const pics = [...profilePictures];
    return (
      <div className="App">
        {/* this.state.starwarsChars returns an array where each element is a character */}
        <h1 className="Header">React Wars</h1>
        <div className="row container">
          {copy.starwarsChars.map((character, index) => (
            <MainDisplay key={index} characterObject={character} img={pics[index]} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
