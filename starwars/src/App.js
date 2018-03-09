import React, { Component } from 'react';
import './App.css';
import { StarWarsCharacters } from './StarWarsCharacters';
import SearchBar from './SearchBar';

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
        <div class="sticky-top">
        <SearchBar charList={this.state.starwarsChars}/>
        </div>
        <h1 className="Header">React Wars</h1>
        {/* This line here is the only line that I added.  It takes the data that componentDidMount put into this.state using this.setState
        and sends it down to StarWarsCharacters as a prop. */}
        <StarWarsCharacters charList={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
