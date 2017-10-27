import React, { Component } from 'react';
import './App.css';

// so we make an App

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
    this.stateItems = this.state.starwarsChars.map((item, i) =>
      <div key={i}>{item.name}</div>
    );
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>{this.stateItems}</div>
      </div>
    );
  }
}

// and we then export the App
export default App;
