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
        <div className = "total">
        {this.state.starwarsChars.map(name =><div className = "card" key={Math.random()}>
        <ul>
        name:{name.name} <br></br>
        height :{name.height} <br></br>
        mass: {name.mass} <br></br>
        hair color: {name.hair_color} <br></br>
        skin color: {name.ski_color} <br></br>
        eye color: {name.eye_color} <br></br>
        birthday:{name.birth_year} <br></br>
        gender:{name.gender} <br></br>
        </ul>
        </div>)}
       
        </div>
      </div>
    );
  }
}

export default App;
