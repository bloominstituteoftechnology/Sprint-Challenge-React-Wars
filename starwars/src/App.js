import React, { Component } from 'react';
import './App.css';
import CharsList from './components/CharsList';

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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        
        
        <CharsList chars = {this.state.starwarsChars} />
        {/* {this.state.starwarsChars.map(char =><div className = "card" key={Math.random()}>
        <ul>
        name:{char.name} <br></br>
        height :{char.height} <br></br>
        mass: {char.mass} <br></br>
        hair color: {char.hair_color} <br></br>
        skin color: {char.ski_color} <br></br>
        eye color: {char.eye_color} <br></br>
        birthday:{char.birth_year} <br></br>
        gender:{char.gender} <br></br>
        </ul>
        </div>)}        */}
        
      </div>
    );
  }
}

export default App;
