import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      current: 0,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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

  prev = () => {
    this.setState({
      current: this.state.current !== 0 ? this.state.current - 1 : 0
    })
  }

  next = () => {
    this.setState({
      current: this.state.current !== this.state.starwarsChars.length - 1 ? this.state.current + 1 : this.state.starwarsChars.length - 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Card testState={this.state.starwarsChars} currentDisplay={this.state.current} />
        <button onClick={this.prev}>prev</button>
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}

export default App;
