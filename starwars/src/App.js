import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    this.clickNext = this.clickNext.bind(this);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }
  
  clickNext() {
    this.getCharacters('https://swapi.co/api/people/?page=2');
    // for (let i=2; i<=9; i++) {
    //   this.getCharacters('https://swapi.co/api/people/?page='[i]);
    // }
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
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1
          className="Header"
        >
          React Wars
        </h1>
        
        <CardList
          characters={this.state.starwarsChars}
        />

        <div onClick={this.clickNext} className="load-more-button">
          Next 10 Characters...
        </div>
      </div>
    );
  }
}

export default App;

// Pull Request
// https://github.com/LambdaSchool/Sprint-Challenge-React/pull/306