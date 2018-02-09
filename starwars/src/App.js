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
        <table>
          <thead>
            <tr>
              <th>Character Name</th>
              <th>Gender</th>
              <th>Birth Year</th>
              <th>Hair Color</th>
              <th>Eye Color</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {this.state.starwarsChars.map((char, i) => {
              return (
              <tr key={i}>
                <td>{char.name}</td>
                <td>{char.gender}</td>
                <td>{char.birth_year}</td>
                <td>{char.hair_color}</td>
                <td>{char.eye_color}</td>
                <td>{char.height}</td>
                <td>{char.mass}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
