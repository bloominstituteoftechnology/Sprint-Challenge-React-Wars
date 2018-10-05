import React, { Component } from 'react';
import './App.css';
import Character from "./components/StarWarsCharacters";
import HomeTowns from"./components/StarWarsPlanets";
import Films from"./components/StarWarsFilms";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
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


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h1 className="Header">Characters</h1>
        <div className="characters">
          {this.state.starwarsChars.map(item => {
            return(
            <Character characterSet={item} />
            )
          }) }
        </div>
        <h1 className="Header">Planets</h1>
        <div className="Towns">
          <HomeTowns />
        </div>
        <h1 className="Header">Films</h1>
        <div className="Films">
          <Films />
        </div>
      </div>
    );
  }
}

export default App;

