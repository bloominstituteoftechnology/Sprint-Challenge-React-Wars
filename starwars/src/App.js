import React, { Component } from 'react';
import CardContainer from './components/CardContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      homeWorld: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getHomeworld = () => {
    let luke = this.state.starwarsChar;
    console.log(luke)
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
      {this.getHomeworld()}
        <h1 className="Header">Chad Jemmett's React Wars</h1>
        <CardContainer starwarsChars={this.state.starwarsChars} getCharacters={this.getCharacters} />
      </div>
    );
  }
}

export default App;
