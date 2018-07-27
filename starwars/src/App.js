import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'


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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map(swchars => {
          return (
          <div key={swchars.name}>
          <p>{swchars.birth_year}</p>
          <p>{swchars.eye_color}</p>
          {/* <p>{swchars.films}</p> */}
          <p>{swchars.gender}</p>
          <p>{swchars.hair_color}</p>
          <p>{swchars.height}</p>
          {/* <p>{swchars.homeworld}</p> */}
          <p>{swchars.mass}</p>
          <p>{swchars.name}</p>
          <p>{swchars.skin_color}</p>
          </div>
          );
        })}
        />
      </div>
    );
  }
}

export default App;
