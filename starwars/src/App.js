import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

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
    console.log('starwarsChars', this.state.starwarsChars);

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul>

        {this.state.starwarsChars.map((character, key) => {
          return (
            <li key={key} className="cc">
              <NavLink to={`/${character.name}`}>{character.name}</NavLink>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default App;
