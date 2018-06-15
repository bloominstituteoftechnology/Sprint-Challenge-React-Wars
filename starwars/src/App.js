import React, { Component } from 'react';
import './App.css';
import Character from './components/Character';

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
        <div className="card-container">
          {/* <Characters value={this.state.starwarsChars}  */}
        {/* /> */}
        {this.state.starwarsChars.map(char => {
          return (
          <Character 
            key={char.name} 
            name={char.name} 
            birth_year={char.birth_year} 
            eye_color={char.eye_color}
            films={char.films} 
            gender={char.gender} 
            hair_color={char.hair_color}
            height={char.height}
            homeworld={char.homeworld}
            homeworld_name={char.homeworld.name}
            mass={char.mass}
            skin_color={char.skin_color}
          />
          );
        })
        }
        </div>
      </div>
    );
  }
}

export default App;
