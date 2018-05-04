import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


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
        console.log(this.state);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
}

App.propTypes = {
  birth_year: PropTypes.number,  // "19BBY"
  created: PropTypes.string,  // "2014-12-09T13:50:51.644000Z"
  edited: PropTypes.string,  // "2014-12-20T21:17:56.891000Z"
  eye_color: PropTypes.string,  // "blue"
  films: PropTypes.arrayOf(PropTypes.string),  // (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
  gender: PropTypes.string,  // "male"
  hair_color: PropTypes.string,  // "blond"
  height: PropTypes.number,  // "172"
  homeworld: PropTypes.string,  // "https://swapi.co/api/planets/1/"
  mass: PropTypes.number,  // "77"
  name: PropTypes.string,  // "Luke Skywalker"
  skin_color: PropTypes.string,  // "fair"
  species: PropTypes.arrayOf(PropTypes.string),  //  ["https://swapi.co/api/species/1/"]
  starships: PropTypes.arrayOf(PropTypes.string),  // (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
  url: PropTypes.string,  // "https://swapi.co/api/people/1/"
  vehicles: PropTypes.arrayOf(PropTypes.string)  // (2
};

export default App;
