import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  clickHandler = (event) => {
    event.preventDefault();
    event.target.parentNode.classList.toggle('selected');
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardList starwars={this.state.starwarsChars} 
        selected={this.state.selected}
        clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
