import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Character, Characters, Film, Films, Home, Navigation, Planet, Planets, Species, Starship, Starships, UniqueSpecies, Vehicle, Vehicles } from './components'
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
      <div className="container-fluid mx-0 px-0">
        <Navigation />
        <div className="titleReactWars mx-0 px-0"> React Strap
        <h1 className="loadhint col-12"> Please Wait Until The Page Has Fully Loaded for Best Results </h1></div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/films" render={(props) => <Films {...props} films={this.state.starwarsFilms}/>}/>
            {this.state.starwarsFilms.map(film => {
              return (
              <Route path={`/films/${film.title.toLowerCase().split(' ').join('')}`} key={film.title} render={(props) => 
              <Film 
              {...props} 
              title={film.title}
              episode_id={film.episode_id}
              opening_crawl={film.opening_crawl}
              director={film.director}
              producer={film.producer}
              release_date={film.release_date}
              characters={this.state.starwarsChars.filter(character => {
                return film.characters.includes(character.url)
              }).map(character => { return character.name })}
              planets={this.state.starwarsPlanets.filter(planet => {
                return film.planets.includes(planet.url)
              }).map(planet=> { return planet.name })}
              starships={this.state.starwarsStarships.filter(starship => {
                return film.starships.includes(starship.url)
              }).map(starship => { return starship.name })}
              vehicles={this.state.starwarsSpecies.filter(species => {
                return film.species.includes(species.url)
              }).map(species => { return species.name })}/>}/>)})}
          <Route exact path="/starships" render={(props) => <Starships {...props} starships={this.state.starwarsStarships}/>}/>
            {this.state.starwarsStarships.map(starship => {
              return (
              <Route path={`/starships/${starship.name.toLowerCase().split(' ').join('')}`} key={starship.name} render={(props) => 
              <Starship 
              {...props} 
              name={starship.name}
              model={starship.model}
              manufacturer={starship.manufacturer}
              cost_in_credits={starship.cost_in_credits}
              length={starship.length}
              max_atmosphering_speed={starship.max_atmosphering_speed}
              crew={starship.crew}
              passengers={starship.passengers}
              cargo_capacity={starship.cargo_capacity}
              consumables={starship.consumables}
              hyperdrive_rating={starship.hyperdrive_rating}
              MGLT={starship.MGLT}
              starship_class={starship.starship_class}
              pilots={this.state.starwarsChars.filter(character => {
                return starship.pilots.includes(character.url)
              }).map(character => { return character.name })}/>}/>)})}
          <Route exact path="/vehicles" render={(props) => <Vehicles {...props} vehicles={this.state.starwarsVehicles}/>}/>
            {this.state.starwarsVehicles.map(vehicle => {
              return (
              <Route path={`/vehicles/${vehicle.name.toLowerCase().split(' ').join('')}`} key={vehicle.name} render={(props) => 
              <Vehicle 
              {...props} 
              name={vehicle.name}
              model={vehicle.model}
              manufacturer={vehicle.manufacturer}
              cost_in_credits={vehicle.cost_in_credits}
              length={vehicle.length}
              max_atmosphering_speed={vehicle.max_atmosphering_speed}
              crew={vehicle.crew}
              passengers={vehicle.passengers}
              cargo_capacity={vehicle.cargo_capacity}
              consumables={vehicle.consumables}
              vehicle_class={vehicle.vehicle_class}
              pilots={this.state.starwarsChars.filter(character => {
                return vehicle.pilots.includes(character.url)
              }).map(character => { return character.name })}/>}/>)})}
            <Route exact path="/species" render={(props) => <Species {...props} species={this.state.starwarsSpecies}/>}/>
            {this.state.starwarsSpecies.map(species => {
              return (
                <Route path={`/species/${species.name.toLowerCase().split(' ').join('')}`} key={species.name} 
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
              <Route path={`/planets/${planet.name.toLowerCase().split(' ').join('')}`} key={planet.name} render={(props) => 
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
            <Route
            path={`/characters/${character.name.toLowerCase().split(' ').join('')}`} key={character.url}
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
              }/>
          )
        })}  
        </Switch>
      </div>
    )
  }
}

export default App;
