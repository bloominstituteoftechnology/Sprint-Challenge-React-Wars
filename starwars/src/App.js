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
    const data =this.state.starwarsChars.map(character =>  
        <div className="character_card">
          <h1 className="name">{character.name}</h1>
          <h2 className="height">{character.height}</h2>
          <p className="hair_color">{character.hair_color}</p>
          <p className="skin_color">{character.skin_color}</p>
          <p className="birth">{character.birth_year}</p>
          <p className="gender">{character.gender}</p>
          <p className="homeworld">{character.homeworld}</p>
          <p className="films">{character.films}</p>
          <p className="gender">{character.gender}</p>
          <p className="species">{character.species}</p>
          <p className="vehicles">{character.vehicles}</p>
          <p className="starships">{character.starships}</p>
          </div> 
        )

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {data}

      </div>
    );
  }
}



export default App;
