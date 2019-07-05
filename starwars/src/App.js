import React, { Component } from 'react';
import CardsList from './components/CardsList';
import './App.css';

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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {/* {this.state.starwarsChars.map((character) => 
          <div className='card'>
            <p>Name: {character.name}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Homeworld: {character.homeworld}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Starships: {character.starships}</p>
            <p>Vehicles: {character.vehicles}</p>
            <p>Films: {character.films}</p>
            <p>URL: {character.url}</p>
            <p>Created: {character.created}</p>
            <p>Edited: {character.edited}</p>                                             
          </div>
        )} */}

        <CardsList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
