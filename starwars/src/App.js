import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsPlanets: []
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

      fetch('https://swapi.co/api/planets')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsPlanets: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardContainer characters={this.state.starwarsChars} planets={this.state.starwarsPlanets} />
      </div>
    );
  }
}

export default App;
