import React, { Component } from 'react';
import './App.css';
import PeopleList from './PeopleList';

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
        <header className="App-header">
          <h1 className="App-title">React Wars</h1>
          <h2 className="App-subTitle">May the 4th be with you!</h2>
        </header>
        <PeopleList results={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;