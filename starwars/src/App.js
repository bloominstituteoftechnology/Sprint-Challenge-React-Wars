import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="card-container">
        {this.state.starwarsChars.map((character, key) => {
          return (
            <div key={key} className="cc">
              <h2 className="cc__name">{character.name}</h2>
              <div className="cc__birth-year"><b>birth year: </b>{character.birth_year}</div>
              <div className="cc__eye-color"><b>eye color: </b>{character.eye_color}</div>
              <div className="cc__gender"><b>gender: </b>{character.gender}</div>
              <div className="cc__hair-color"><b>hair color: </b>{character.hair_color}</div>
              <div className="cc__mass"><b>mass: </b>{character.mass}</div>
              <div className="cc__skin-color"><b>skin color: </b>{character.skin_color}</div>
              <a href={character.homeworld}>{character.name}'s homeworld</a>
            </div>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
