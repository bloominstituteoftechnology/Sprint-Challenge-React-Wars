import React, { Component } from 'react';
import './App.css';
import Characters from './Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
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
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">I don't like Star Wars</h1>
        <h2><Characters charArray={this.state.starwarsChars}/></h2>
      </div>
    );
  }
}

export default App;
