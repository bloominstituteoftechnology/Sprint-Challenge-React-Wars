import React, { Component } from 'react';
import './App.css';
import Character from './components/Character.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      starwarsPlanets: [],
      starwarsFilms: [],
      starwarsSpecies: [],
      starwarsVehicles: [],
      starwarsStarships: []
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
      fetch('https://swapi.co/api/planets/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsPlanets: data.results });
      })
      fetch('https://swapi.co/api/films/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsFilms: data.results });
      })
      fetch('https://swapi.co/api/species/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsSpecies: data.results });
      })
      fetch('https://swapi.co/api/vehicles')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsVehicles: data.results });
      })      
      fetch('https://swapi.co/api/starships')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsStarships: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  
  render() {
    
    return (
<div>
  <h1 className="titleReactWars"> React Strap </h1>
      {this.state.starwarsChars.map(character => {
        return (
        <Character 
        key={character.url}
        name={character.name}
        height={character.height}
        mass={character.mass}
        hair_color={character.hair_color}
        skin_color={character.skin_color}
        eye_color={character.eye_color}
        birth_year={character.birth_year}
        gender={character.gender}
        films={this.state.starwarsFilms.filter(film => {
          return character.films.includes(film.url)
        }).map(film => {return film.title})}
        vehicles={character.vehicles}
        starships={character.starships}
        species={character.species} />
        )})}
      </div>
      )
  }
}

export default App;
