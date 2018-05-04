import React, { Component } from 'react';
import './App.css';
import Films from './components/Films.js'
import Species from './components/Species.js'
import Vehicles from './components/Vehicles.js'
import Starships from './components/Starships.js'
import BaseStats from './components/BaseStats.js'


class App extends Component {
  constructor(props) {
    super(props);
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
      <div className="container-fluid">
        <h1 className="titleReactWars"> React Strap </h1>
        <div className="row">
        {this.state.starwarsChars.map(characters => {
          return (
          <div key={characters.url} className="mein-cards">
            <BaseStats 
                name={characters.name}
                height={characters.height}
                mass={characters.mass}
                hair_color={characters.hair_color}
                skin_color={characters.skin_color}
                eye_color={characters.eye_color}
                birth_year={characters.birth_year}
                gender={characters.gender}
                homeworld={characters.homeworld} 
                url={characters.url}/>
          <Species 
              species={characters.species} />
          <Vehicles 
              vehicles={characters.vehicles} />
          <Starships 
              starships={characters.starships} />
          <Films 
              films={characters.films} />
          </div>
          )})}
        </div>
      </div>
    );
  }
}

export default App;
