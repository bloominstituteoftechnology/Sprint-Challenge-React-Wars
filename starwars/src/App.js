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
      {this.state.starwarsChars.map( (element, index) =>
        <div>{element.height}</div>}
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
    return 
    <div className="App StarWars">
    +        <header className="App-header">
    +          <img src={logo} className="App-logo" alt="logo" />
    +          <h1 className="App-title">StarWars Logo</h1>
    +        </header>
    +        <p className="App-intro">
    +          To get started, edit <code>src/App.js</code> and save to reload.
    +        </p>
    +      </div>
}

export default App;
