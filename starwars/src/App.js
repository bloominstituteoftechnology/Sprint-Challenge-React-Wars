import React, { Component } from 'react';
import './App.css';
import StarWarsChars from './components/StarWarsChars'
// import Card from './components/Card'


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
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <StarWarsChars starwarsChars={this.state.starwarsChars} />
          {/* {this.state.starwarsChars.map(swchars => {
            return (
            <div key={swchars.name}>
            <p><strong>Name:</strong> {swchars.name}</p>
            <p><strong>Birth Year:</strong> {swchars.birth_year}</p>
            <p><strong>Eye Color:</strong> {swchars.eye_color}</p>
            <p>{swchars.films}</p>
            <p><strong>Gender:</strong> {swchars.gender}</p>
            <p><strong>Hair Color:</strong> {swchars.hair_color}</p>
            <p><strong>Height:</strong> {swchars.height}</p>
            <img src="{swchars.homeworld}" />
            <p><strong>Mass:</strong> {swchars.mass}</p>
            <p><strong>Skin Color:</strong> {swchars.skin_color}</p>
            </div>
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default App;
