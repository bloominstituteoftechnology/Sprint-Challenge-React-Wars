import React, { Component } from 'react';
import InfoCard from "./components/InfoCard/InfoCard.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.nextKey = 1;
    this.nextId = 1;
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

getNextKey = () => {
  return this.nextKey++;
}

getNextId = () => {
  return this.nextId++;
}

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="App InfoCardSection">
          {this.state.starwarsChars.map((character, index) => {
            return (
              <div className="App InfoCardSection InfoCardContainer" key={this.getNextKey()}>
                <InfoCard
                id={this.getNextId()}
                character={character}
                />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
