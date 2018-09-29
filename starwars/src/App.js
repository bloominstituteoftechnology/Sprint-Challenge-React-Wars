import React, { Component } from 'react';
import Card from "./components/Card";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
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
        console.log(data.results)
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
        <div>
          {this.state.starwarsChars.map(character => (
            <Card
              link={character.url}
              name={character.name}
              species={character.species[0]}
              homeworld={character.homeworld}
              gender={character.gender}
              birthyear={character.birth_year}
              hair={character.hair_color}
              eyes={character.eye_color}
              skin={character.skin_color}
              height={character.height}
              mass={character.mass}
              films={character.films}
              ships={character.starships}
              vehicles={character.vehicles}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
