import React, { Component } from 'react';
import './App.css';
// import Films from './filmsComponent.jsx';


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
        {this.state.starwarsChars.map((person, index) => {
          return(
          <div key={person.name + person.height} className="Charcard">
            <h4>{person.name}</h4> 
            <p>{person.height} increments</p>
            <p>{person.eye_color} eyes</p>
            <p>{person.hair_color} hair</p>
            <p>Born in {person.birth_year}</p>
            <p>sex: {person.gender}</p>
            </div>  
          );
        })}
      </div>
    );
  }
}

export default App;
