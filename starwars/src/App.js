import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom'
import Character from './components/Character.js'
const axios = require('axios')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      starwarsFilms: [],
      starwarsSpecies: [],
      starwarsPlanets: [],
      starwarsVehicles: [],
      starwarsStarships: [],
    };
  }
  getAllCharacters = () => {
    const fetchCharacters = () => {
      return axios.get('https://swapi.co/api/people')
    }
    const fetchCharacters2 = () => {
      return axios.get('https://swapi.co/api/people/?page=2')
    }
    const fetchCharacters3 = () => {
      return axios.get('https://swapi.co/api/people/?page=3')
    }
    const fetchCharacters4 = () => {
      return axios.get('https://swapi.co/api/people/?page=4')
    }
    const fetchCharacters5 = () => {
      return axios.get('https://swapi.co/api/people/?page=5')
    }
    const fetchCharacters6 = () => {
      return axios.get('https://swapi.co/api/people/?page=6')
    }
    const fetchCharacters7 = () => {
      return axios.get('https://swapi.co/api/people/?page=7')
    }
    const fetchCharacters8 = () => {
      return axios.get('https://swapi.co/api/people/?page=8')
    }
    const fetchCharacters9 = () => {
      return axios.get('https://swapi.co/api/people/?page=9')
    }
    Promise.all([fetchCharacters(), fetchCharacters2(), fetchCharacters3(), fetchCharacters4(), fetchCharacters5(), fetchCharacters6(), fetchCharacters7(), fetchCharacters8(), fetchCharacters9()])
      .then(response => {
        let characters = response.map(array => {
          return array.data.results
        })
        let allCharacters = characters[0].concat(characters[1], characters[2], characters[3], characters[4], characters[5], characters[6], characters[7], characters[8])
        this.setState({ starwarsChars: allCharacters })
      })
  }
  getAllSpecies = () => {
    const getSpecies = () => {
      return axios.get('https://swapi.co/api/species/')
    }
    const getSpecies2 = () => {
      return axios.get('https://swapi.co/api/species/?page=2')
    }
    const getSpecies3 = () => {
      return axios.get('https://swapi.co/api/species/?page=3')
    }
    const getSpecies4 = () => {
      return axios.get('https://swapi.co/api/species/?page=4')
    }
    axios.all([getSpecies(), getSpecies2(), getSpecies3(), getSpecies4()])
      .then(response => {
        let species = response.map(array => {
          return array.data.results
        })
        let allSpecies = species[0].concat(species[1], species[2], species[3])
        this.setState({ starwarsSpecies: allSpecies })
      })
      .catch(error => {
        console.log('That did not go as well as originally planned', error)
      })
  }
  fetchFilms = () => {
    axios
      .get('https://swapi.co/api/films/')
      .then(res => {
        let films = res.data.results;
        this.setState({ starwarsFilms: films })
      })
      .catch(err => {
        console.log('I have made a terrible mistake in fetching films', err)
      })
  }
  getAllPlanets = () => {
    const getPlanets = () => {
      return axios.get('https://swapi.co/api/planets/')
    }
    const getPlanets2 = () => {
      return axios.get('https://swapi.co/api/planets/?page=2')
    }
    const getPlanets3 = () => {
      return axios.get('https://swapi.co/api/planets/?page=3')
    }
    const getPlanets4 = () => {
      return axios.get('https://swapi.co/api/planets/?page=4')
    }
    const getPlanets5 = () => {
      return axios.get('https://swapi.co/api/planets/?page=5')
    }
    const getPlanets6 = () => {
      return axios.get('https://swapi.co/api/planets/?page=6')
    }
    const getPlanets7 = () => {
      return axios.get('https://swapi.co/api/planets/?page=7')
    } 

    Promise.all([getPlanets(), getPlanets2(), getPlanets3(), getPlanets4(), getPlanets5(), getPlanets6(), getPlanets7()])
      .then(response => {
        let planets = response.map(array => {
          return array.data.results
        })
        let allPlanets = planets[0].concat(planets[1], planets[2], planets[3], planets[4], planets[5], planets[6])
        this.setState({ starwarsPlanets: allPlanets })
      })
  }
  getAllStarships = () => {
    const getStarships = () => {
      return axios.get('https://swapi.co/api/starships/')
    }
    const getStarships2 = () => {
      return axios.get('https://swapi.co/api/starships/?page=2')
    }
    const getStarships3 = () => {
      return axios.get('https://swapi.co/api/starships/?page=3')
    }
    const getStarships4 = () => {
      return axios.get('https://swapi.co/api/starships/?page=4')
    }
    Promise.all([getStarships(), getStarships2(), getStarships3(), getStarships4()])
      .then(response => {
        let starships = response.map(array => {
          return array.data.results
        })
        let allStarships = starships[0].concat(starships[1], starships[2], starships[3])
        this.setState({ starwarsStarships: allStarships })
      })
      .catch(error => {
        console.log('Oops!', error)
      })
  }
  getAllVehicles = () => {
    const getVehicles = () => {
      return axios.get('https://swapi.co/api/vehicles/')
    }
    const getVehicles2 = () => {
      return axios.get('https://swapi.co/api/vehicles/?page=2')
    }
    const getVehicles3 = () => {
      return axios.get('https://swapi.co/api/vehicles/?page=3')
    }
    const getVehicles4 = () => {
      return axios.get('https://swapi.co/api/vehicles/?page=4')
    }
    Promise.all([getVehicles(), getVehicles2(), getVehicles3(), getVehicles4()])
      .then(response => {
        let vehicles = response.map(array => {
          return array.data.results
        })
        let allVehicles = vehicles[0].concat(vehicles[1], vehicles[2], vehicles[3])
        this.setState({ starwarsVehicles: allVehicles })
      })
      .catch(err => {
        console.log('well, that was a fail', err)
      });

  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    this.fetchFilms();
    this.getAllCharacters();
    this.getAllPlanets();
    this.getAllStarships();
    this.getAllVehicles();
    this.getAllSpecies();
  }
  render() {
    return (
      <div>
        <h1 className="titleReactWars"> React Strap </h1>
        {this.state.starwarsChars.map(character => {
          return (
            <div key={character.mass + character.url}>
        <Switch>
          <Route exact path="/" render={(props) => 
          <div className="container">
            <NavLink to={`/${character.name.toLowerCase()}`} className="col-12"> {character.name} </NavLink> </div>}/>
            <Route
            path={`/${character.name.toLowerCase()}`} 
            render={(props) =>
            <div key={character.url + character.name}>
            <Character
              {...props}
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
              }).map(film => { return film.title })}
              vehicles={this.state.starwarsVehicles.filter((vehicle) => {
                return character.vehicles.includes(vehicle.url)
              }).map(vehicle => { return vehicle.name })}
              starships={this.state.starwarsStarships.filter((starship => {
                return character.starships.includes(starship.url)
              })).map(starship => { return starship.name })}
              species={this.state.starwarsSpecies.filter(species => {
                return character.species.includes(species.url)
              }).map(species => { return species.name })} 
              homeworld={this.state.starwarsPlanets.filter(planet => {
                return character.homeworld.includes(planet.url)
              }).map(planet => { return planet.name })}/>
              </div>
            }/>
      </Switch>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
