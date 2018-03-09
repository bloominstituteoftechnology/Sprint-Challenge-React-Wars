import React, { Component } from 'react';
import './App.css';
import {DisplayChars} from './DisplayChars'


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

      console.log("This is starwarsChars: ", this.state.starwarsChars);
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
        <h2>The list of Starwars Characters</h2>
      </div>
        <div>
          <DisplayChars characters = {this.state.starwarsChars} />
        </div>
      </div>
        
    );
  }
}

export default App;
