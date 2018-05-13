import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom'
import Character from './components/Character.js'
import Home from './components/Home'
import Characters from './components/Characters'
import Planets from './components/Planets'
import Planet from './components/Planet'
import Species from './components/Species'
import Navigation from './components/Navigation'
import UniqueSpecies from './components/UniqueSpecies'
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
  getAllCharacters = (page = 1) => {
    let result = []
      axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        console.log('Response after then - People', response)
        result = this.state.starwarsChars;
        response.data.results.forEach(people => result.push(people));
        this.setState({ starwarsChars: result })
        console.log('Result after push - People', result)
        if (response.data.next !== null) {
          page++
          this.getAllCharacters(page)
        } 
      });
    } // Expect 87 count (as of 5/13/18)
  getAllSpecies = (page = 1) => {
  let result = []
    axios.get(`https://swapi.co/api/species/?page=${page}`)
    .then(response => {
      console.log('Response after then', response)
      result = this.state.starwarsSpecies;
      response.data.results.forEach(species => result.push(species));
      this.setState({ starwarsSpecies: result })
      console.log('Result after push', result)
      if (response.data.next !== null) {
        page++
        this.getAllSpecies(page)
      } 
    });
  } // Expect 37 count (as of 5/13/18)
  fetchFilms = (page = 1) => {
    let result = []
      axios.get(`https://swapi.co/api/films/?page=${page}`)
      .then(response => {
        console.log('Response after then - Films', response)
        result = this.state.starwarsFilms;
        response.data.results.forEach(film => result.push(film));
        this.setState({ starwarsFilms: result })
        console.log('Result after push - Films', result)
        if (response.data.next !== null) {
          page++
          this.fetchFilms(page)
        } 
      });
    } // Expect 7 count (as of 5/13/18)
    getAllPlanets = (page = 1) => {
      let result = []
        axios.get(`https://swapi.co/api/planets/?page=${page}`)
        .then(response => {
          console.log('Response after then - Planets', response)
          result = this.state.starwarsPlanets;
          response.data.results.forEach(planet => result.push(planet));
          this.setState({ starwarsPlanets: result })
          console.log('Result after push - Planets', result)
          if (response.data.next !== null) {
            page++
            this.getAllPlanets(page)
          } 
        });
      } // Expect 61 count (as of 5/13/18)
  getAllStarships = (page = 1) => {
  let result = []
    axios.get(`https://swapi.co/api/starships/?page=${page}`)
    .then(response => {
      console.log('Response after then - Starships', response)
      result = this.state.starwarsStarships;
      response.data.results.forEach(starship => result.push(starship));
      this.setState({ starwarsStarships: result })
      console.log('Result after push - Starships', result)
      if (response.data.next !== null) {
        page++
        this.getAllStarships(page)
      } 
    });
  } // Expect 37 count (as of 5/13/18)
  getAllVehicles = (page = 1) => {
    let result = []
      axios.get(`https://swapi.co/api/vehicles/?page=${page}`)
      .then(response => {
        console.log('Response after then - Vehicles', response)
        result = this.state.starwarsVehicles;
        response.data.results.forEach(vehicle => result.push(vehicle));
        this.setState({ starwarsVehicles: result })
        console.log('Result after push - Vehicles', result)
        if (response.data.next !== null) {
          page++
          this.getAllVehicles(page)
        } 
      });
    } // Expect 39 count (as of 5/13/18)
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
      <div className="container-fluid mx-auto">
        <Navigation />
        <h1 className="titleReactWars"> React Strap </h1>
        <h1 className="loadhint mx-auto col-12"> Please Wait Until The Page Has Fully Loaded for Best Results </h1>   
        <Switch>
          <Route exact path="/" component={Home}/>
            <Route exact path="/species" render={(props) => <Species {...props} species={this.state.starwarsSpecies}/>}/>
            {this.state.starwarsSpecies.map(species => {
              return (
                <Route path={`/species/${species.name}`} key={species.name} 
                render={(props) =>
                <UniqueSpecies 
                {...props} 
                name={species.name}
                classification={species.classification}
                designation={species.designation}
                average_height={species.average_height}
                skin_colors={species.skin_colors}
                hair_colors={species.hair_colors}
                eye_colors={species.eye_colors}
                average_lifespan={species.average_lifespan}
                homeworld={species.homeworld}
                language={species.language}
                people={this.state.starwarsChars.filter(character => {
                return species.people.includes(character.url)
              }).map(character => { return character.name })}/>}/>
              )
            })}
            <Route exact path="/planets" render={(props) => <Planets {...props} planets={this.state.starwarsPlanets}/>}/>
            {this.state.starwarsPlanets.map(planet => {
              return (
              <Route path={`/planets/${planet.name}`} key={planet.name} render={(props) => 
              <Planet 
              {...props} 
              name={planet.name}
              rotation_period={planet.rotation_period}
              orbital_period={planet.orbital_period}
              diameter={planet.diameter}
              climate={planet.climate}
              gravity={planet.gravity}
              terrain={planet.terrain}
              surface_water={planet.surface_water}
              population={planet.population}
              residents={this.state.starwarsChars.filter(character => {
                return planet.residents.includes(character.url)
              }).map(character => { return character.name })}/>}/>)})}
            <Route exact path="/characters" render={(props) => 
            <Characters {...props} characters={this.state.starwarsChars}/>}/>
        {this.state.starwarsChars.map(character => {
          return (
            <div key={character.url + character.name}>
            <Route
            path={`/characters/${character.name}`} 
            render={(props) =>
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
              }/></div>
          )
        })}  
        </Switch>
      </div>
    )
  }
}

export default App;
