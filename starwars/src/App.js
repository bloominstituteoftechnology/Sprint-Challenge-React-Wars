import React, { Component } from 'react';
import './App.css';
import { results } from './starWarsPersons.js';
import StarWarsCharsList from './StarWarsCharsList';



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    this.setState({ starwarsChars: results });
  }


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        < StarWarsCharsList starwarsChars = {this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
