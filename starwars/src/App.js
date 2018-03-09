import React, { Component } from 'react';
import './App.css';
import CharCard from './CharCard';

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
        <div className="card-container">
        {this.state.starwarsChars.map(char => {
          return (
          <CharCard key={char.name} name={char.name} height={char.height}  mass={char.mass} hair={char.hair_color} eyes={char.eye_color} birth_year={char.birth_year} gender={char.gender} />
          );
        })
        }
        </div>
      </div>
    );
  }
}

export default App;
