import React, { Component } from 'react';
import './App.css';
import SwCard from  './components/SwCard'

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
        this.setState({ starwarsChars: data.results }, () =>  {})//console.log('sw:',this.state.starwarsChars[0]));
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    const cards = (this.state.starwarsChars.map(c => {
      return (
        <li key={c.name}><SwCard character={c} /></li>
      )
    }))
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul>
          {cards}
        </ul>
      </div>
    );
  }
}

export default App;
