import React, { Component } from 'react';
import './App.css';
import './components/StarWarsList'
import StarWarsList from './components/StarWarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
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
        <StarWarsList starwarsChars ={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
