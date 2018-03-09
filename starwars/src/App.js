import React, { Component } from 'react';
import './App.css';
import Warobjects from './components/warObjects/Warobjects';
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
        <h1 className="Header">Star Wars Charecters</h1>
        {this.state.starwarsChars.map(object =><Warobjects key = {object.created} object = {object}
         />
        )}
      </div>
    );
  }
}

export default App;
