import React, { Component } from 'react';
import Card from "./components/Card";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      previous: ""
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
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePagination = event => {
    if (event.target.value === "prev") {
      if (this.state.previous !== null) {
        this.getCharacters(this.state.previous);
      }
    } else {
      if (this.state.next !== null) {
        this.getCharacters(this.state.next);
      }
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button value="prev" onClick={this.handlePagination}>Previous Page</button>
        <button value="next" onClick={this.handlePagination}>Next Page</button>
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
