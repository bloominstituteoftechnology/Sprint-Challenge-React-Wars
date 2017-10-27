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
        <div className="flexContainer">
          {this.state.starwarsChars.map(data => {
            return (
              <div className="flexContainer__card">
                <div className="flexContainer__card--header">{data.name}</div>
                <div className="flexContainer__card--body">
                  <ul>
                    <li>Birth Year: {data.birth_year}</li>
                    <li>Eye Color: {data.eye_color}</li>
                    <li>Gender: {data.gender}</li>
                    <li>Hair Color: {data.hair_color}</li>
                    <li>Height: {data.height}</li>
                    <li>Mass: {data.mass}</li>
                    <li>Skin Color: {data.skin_color}</li>
                    <li>
                      URL: <a href={data.url}>Click!</a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
