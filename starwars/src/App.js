import React, { Component } from 'react';
import './App.css';
import SWPeopleList from './SWPeopleList.js';

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
      <div className="container">
        <div className="App">
          <div className="headDiv"><h1 className="Header">React Wars by K-Fly</h1></div>
          <div className="subDiv"><p>"Do, Or Do Not. There is no try." - Master Yoda</p></div>
          <div className="displayApp"> <SWPeopleList people={this.state.starwarsChars} /></div>
        </div>
      </div>
    );
  }
}

export default App;