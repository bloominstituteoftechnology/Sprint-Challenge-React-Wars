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
    const myStarWars = fetch('https://swapi.co/api/people')
      myStarWars.then(res => {
        return res.json();
      })
      .then(starwarsChars => {
        this.setState({ starwarsChars: starwarsChars.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map(starwarchar => {
          return(
          <div>
              <h3> {starwarchar.name}</h3> 
              <p> {starwarchar.birth_year}</p>
              <p> {starwarchar.created}</p>
              <p> {starwarchar.eyecolor} </p>
              {/* <p> {starwarchar.films} </p> */}
              <p> {starwarchar.gender} </p>
              <p> {starwarchar.hair_color} </p>

          </div>
        );})};
      </div>
    );
  }
}

export default App;
