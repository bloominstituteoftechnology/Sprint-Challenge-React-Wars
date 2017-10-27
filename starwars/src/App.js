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
        {this.state.starwarsChars.map((starwar) => {
          return (
            <div className="starWars">
            
            <p>{starwar.birth_year}</p>
            <p>{starwar.created}</p>
            <p>{starwar.edited}</p>
            <p>{starwar.eyecolor}</p>
            <div className="films-cap">
            {starwar.films.map((film, i) => {
              return (
                <div className="films"><p><a href ="{film.films[i]}">Films</a></p></div>
              );
            })}
            </div>
            <p>{starwar.gender}</p>
            <p>{starwar.hiar_color}</p>
            <p>{starwar.height}</p>
            <p><a href ="{starwar.homeworld}">Home World</a></p>
            <p>{starwar.mass}</p>
            <p>{starwar.name}</p>
            <p>{starwar.skin_color}</p>
            <div className="species-cap">
            {starwar.species.map((specie, i) => {
              return (
                <div className="species"><p><a href ="{specie.species[i]}">Species</a></p></div>
              );
            })}
            </div>
            <div className="star-cap">
            {starwar.starships.map((star, i) => {
              return (
                <div className="starships"><p><a href ="{star.starships[i]}">Starships</a></p></div>
              );
            })}
            </div>
            <p><a href = "{starwar.url}"> Link</a> </p>
            <div className="vehicle-cap">
            {starwar.starships.map((vehicle, i) => {
              return (
                <div className="vehicles"><p><a href ="{vehicle.vehicles[i]}">Vehicles</a></p></div>
              );
            })}
            </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
