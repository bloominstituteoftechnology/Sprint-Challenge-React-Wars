import React, { Component } from 'react';
import './App.css';
import StarWarsList from './components/StarWarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      char: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL) //fetch is like a get request for ajax calls
      .then((res) => {
        return res.json(); // fetch happened successfully
      })
      .then((data) => {
        this.setState({ starwarsChars: data.results }); //setting state with data receives
        // recieving a data obj and accessing its results
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
