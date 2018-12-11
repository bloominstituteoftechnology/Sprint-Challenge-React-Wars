import React, { Component } from 'react';
import './App.css';
import CreateWantedPosters from './components/wanted';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  /*Don't pay attention to this. This is not the code your looking for*/
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
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
  /*Start working here, seriously don't even look right here */


  createLicense = () => {
    let starwarsChars = this.state.starwarsChars.slice();

  }


  render() {
    return (
      <div className="App">
        <h1 className="Header">Bounty Hunter Board</h1>
        <CreateWantedPosters
          infoNeeded = {this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
