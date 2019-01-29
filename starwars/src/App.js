import React, { Component } from 'react';
import './App.css';

import Cards from './components/Cards';
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  constructor() {
    super();

    this.state = {
      starwarsChars: [],
      currentPage: 'https://swapi.co/api/people',
      nextPage: '',
      previousPage: ''
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.currentPage);
  }

  nextPage = () => {
    if (this.state.nextPage) {
    this.setState({ 
      currentPage: this.state.nextPage
    })

    this.getCharacters(this.state.nextPage);
    } 
  }

  previousPage = () => {
    if (this.state.previousPage) {
    this.setState({ 
      currentPage: this.state.previousPage
    })

    this.getCharacters(this.state.previousPage);
    }
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
        this.setState({
          starwarsChars: data.results, 
          nextPage: data.next, 
          previousPage: data.previous
        });
      })

      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          next={this.nextPage}
          previous={this.previousPage}
          />

        <Cards 
          characters={this.state.starwarsChars}
          />
      </div>
    );
  }
}

export default App;
