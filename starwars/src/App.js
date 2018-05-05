import React, { Component } from 'react';
import './App.css';
import BaseStats from './components/BaseStats.js'

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
      <div className="container-fluid">
        <h1 className="titleReactWars"> React Strap </h1>
        <div className="row">
        {this.state.starwarsChars.map(characters => {
            this.state.starwarsSpecies.map(species => {
                if (characters.species === species.url) {
                return <BaseStats key={species.url} species={species.name} />
                }})
            this.state.starwarsPlanets.map(planets => {
              if (characters.url === planets.url) {
                return <BaseStats key={planets.url} homeworld={planets.name} />
              }})
            this.state.starwarsFilms.map(film => {
              if (characters.films === film.url) {
            return <BaseStats key={film.url} films={film.title} />
              }})
            this.state.starwarsStarships.map(starship => {
              if (characters.starships === starship.url) {
              return <BaseStats key={starship.url} starship={starship.name} />
            }})
            console.log(this.state.starwarsVehicles.map(vehicles => {
              if (characters.vehicles === vehicles.url) {
              return <BaseStats key={vehicles.url} vehicle={vehicles.name} />
              
            }}))
          return null
        })}   
        </div>
      </div>
    );
  }
}

export default App;
