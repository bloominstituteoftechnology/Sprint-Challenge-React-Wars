import React, { Component } from 'react';
import StarWarsCard from './components/StarWarsCard';
import StarWarsButtons from './components/StarWarsButtons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      prevPage: ''
    };
  }

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
        console.log(data);

        if (data.next === null) {
          data.next = 'https://swapi.co/api/people/';
        }
        if (data.previous === null) {
          data.previous = 'https://swapi.co/api/people/?page=9'
        }

        this.setState({
          starwarsChars: data.results,
          nextPage: data.next,
          prevPage: data.previous
        });

      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="Header">React Wars</h1>
        <StarWarsButtons prevPage={this.state.prevPage} nextPage={this.state.nextPage} button={this.getCharacters} />
        <StarWarsCard starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
