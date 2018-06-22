import React, { Component } from 'react';
import './App.css';
import Character from "./components/Character";
import CharacterNames from "./components/CharacterNames";
import NextPrev from './components/NextPrev';
import Counter from './components/Counter';
import Films from './components/Films';
import FilmNames from './components/FilmNames';
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous: null,
      counter: null,
      films: [],
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
        this.setState({ 
          starwarsChars: data.results, 
          next: data.next, 
          previous: data.previous,
          counter: data.counter,
          films: data.films
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextChar = () => {
    this.getCharacters(this.state.next);
  };

  prevChar = () => {
    this.getCharacters(this.state.previous);
  };

  showFilms = () => {
    this.getCharacters(this.state.films);
  };

  showCounter = () => {
    this.setState({counter: 87});
  };


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <img className="header-pic" src={require('./components/Yoda.jpeg')} alt="yoda"/>
        <Counter 
        value={this.state.counter}
        showCount={this.showCounter} />
        <NextPrev 
        toNext={this.nextChar} 
        toPrevious={this.prevChar} />
        <CharacterNames character={this.state.starwarsChars} />
        <img className="mid-pic" src={require("./components/OG.jpg")} alt="og-poster"/>
        
      </div>
    );
  }
}

export default App;
