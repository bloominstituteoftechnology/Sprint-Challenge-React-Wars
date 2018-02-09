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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul>
          {this.state.starwarsChars.map((character, i) => {
            return (
              <table>
                <tr>
                  <th>Character Name</th>
                  <th>Gender</th>
                  <th>Hair Color</th>
                  <th>Eye Color</th>
                  <th>Height</th>
                </tr>
                <tr key={i}>
                  <td>{character.name}</td>
                  <td>{character.gender}</td>
                  <td>{character.hair_color}</td>
                  <td>{character.eye_color}</td>
                  <td>{character.height}</td>
                </tr>
              </table>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
