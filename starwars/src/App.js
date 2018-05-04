import React, { Component } from 'react';
import './App.css';
import { CharacterInfo } from './components/CharacterInfo.js';

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
    fetch('https://swapi.co/api/people/')
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
        <div id="titles"><div id="titlecontent">

          <h3>Week V</h3>
          <h3>REACT SPRINT CHALLENGE</h3>

          <CharacterInfo chars={this.state.starwarsChars} />

        </div></div>
      </div>
    );
  }
}

export default App;
