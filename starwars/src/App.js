import React, { Component } from 'react';
import './App.css';
import User from './User';
import UserList from './UserList';

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
        <h1 className="Header">React Wars</h1>
        <UserList characters={this.state.starwarsChars}/>
        <div className="Card">
        <ul>
          <p>name: Luke Skywalker</p>
          <p>height: 172</p>
          <p>mass: 77</p>
          <p>hair color: blond</p>
          <p>skin color: fair</p>
          <p>eye color: blue</p>
          <p>birth year: 19BBY</p>
          <p>gender: male</p>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
