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
        <div >
          {this.state.starwarsChars.map((item) => {
            return (
              <div className = 'starwars-card' key = {item.edited}>
                <p className = 'name'>{item.name}</p>
                <div className = 'info'>
                  <p><u><b>Gender:</b></u> {item.gender}</p>
                  <p><u><b>Birth Year:</b></u> {item.birth_year}</p>
                  <p><u><b>Height(cm)</b></u>: {item.height}</p>
                  <p><u><b>Weight(kg)</b></u>: {item.mass}</p>
                  <p><u><b>Hair Color:</b></u> {item.hair_color}</p>
                  <p><u><b>Eye Color:</b></u> {item.eye_color}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
