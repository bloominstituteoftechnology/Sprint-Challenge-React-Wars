import React, { Component } from 'react';
import './App.css';
// import Card from './Card';
import Button from './Button';
import Cards from './Cards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: '',
      previousURL: ''
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
        this.setState({ starwarsChars: data.results, nextURL:data.next, previousURL: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePrevious = () => {
    this.getCharacters(this.state.previousURL);
  }

  handleNext = () => {
    this.getCharacters(this.state.previousURL);
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Button prev={this.handlePrevious} next={this.handleNext}/>       
        <Cards stats={this.state}/>

      </div>
    );
  }
}

export default App;
