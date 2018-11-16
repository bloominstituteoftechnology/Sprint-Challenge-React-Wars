import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert(
  //     `${this.state.starwarsChars.name}\n
  //     Birth year: ${this.state.starwarsChars.birth_year}\n
  //     Homeworld: ${this.state.starwarsChars.homeworld}\n
  //     \n
  //     Species: ${this.state.starwarsChars.species[0]}\n
  //     Gender: ${this.state.starwarsChars.gender}\n
  //     \n
  //     Hair color: ${this.state.starwarsChars.hair_color}\n
  //     Eye color: ${this.state.starwarsChars.eye_color}\n
  //     Skin color: ${this.state.starwarsChars.skin_color}\n
  //     Height: ${this.state.starwarsChars.height}cm\n
  //     Mass: ${this.state.starwarsChars.mass}kg\n
  //     \n
  //     Starships owned: ${this.state.starwarsChars.starships[0]}\n
  //     Vehicles owned: ${this.state.starwarsChars.vehicles[0]}\n
  //     \n
  //     Apperances: ${this.state.starwarsChars.films[0]}\n
  //     \n
  //     Entry created: ${this.state.starwardsChars.created}\n
  //     Entry modified: ${this.state.starwarsChars.edited}\n
  //     `
  //   )
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <ul>
          {this.state.starwarsChars.map(char => (
            <li>
              `{char.name}
              <li>
                Statistical Data
                <li>Birth year: {char.birth_year}</li>
                <li>Homeworld: {char.homeworld}</li>
                <li>Species: {char.species[0]}</li>
                <li>Gender: {char.gender}</li>
              </li>
              <li>
                Physical Features
                <li>Hair color: {char.hair_color}</li>
                <li>Eye color: {char.eye_color}</li>
                <li>Skin color: {char.skin_color}</li>
                <li>Height: {char.height}cm</li>
                <li>Mass: {char.mass}kg</li>
              </li>
              <li>
                Vehicle Ownership
                <li>Starships owned: {char.starships[0]}</li>
                <li>Vehicles owned: {char.vehicles[0]}</li>
              </li>
              <li>
                Theatrical Apperances
                <li>{char.films[0]}</li>
              </li> 
              <li>
                Entry Data
                <li>Entry created: {char.created}</li>
                <li>Entry modified: {char.edited}</li>
              </li>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
