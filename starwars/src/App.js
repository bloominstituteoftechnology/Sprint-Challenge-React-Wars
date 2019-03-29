import React, { Component } from 'react';
import './App.css';
import Characters from './Characters';
import CharacterList from './CharacterList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
    const starwarsChars = this.state.starwarsChars.map(element => {
      return <p className="Para"><p>Name: {element.name}</p> <p>birth year: {element.birth_year}</p> <p>eye color: {element.eye_color} </p><p>hair color: {element.hair_color}</p> <p>height:{element.height}</p> <p>mass: {element.mass} </p><p>skin color: {element.skin_color} </p><p>homeworld: {element.homeworld}</p> <p>vehicles: {element.vehicles}</p> <p className="ship">starships: {element.starships}</p> <p>species: {element.species}</p> <p>films: {element.films}</p> <p>created:{element.created} </p><p>edited: {element.edited} </p></p> 
    });
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="card">{starwarsChars}</div>
      </div>
    );
  }
}

export default App;
