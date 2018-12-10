import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/characterComponent/CharacterCard';
import Nav from "./components/nav/Nav";


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 'https://swapi.co/api/people/',
      nextPage: '',
      previousPage: ''
    };
  }

  nextPage = () => {
    if(this.state.nextPage) {
    this.setState({ 
      currentPage: this.state.nextPage
    })
    this.getCharacters(this.state.nextPage);
    } 
  }

  previousPage = () => {
    if(this.state.previousPage) {
    this.setState({ 
      currentPage: this.state.previousPage
    })
    this.getCharacters(this.state.previousPage);
  }
  }

  componentDidMount() {
    this.getCharacters(this.state.currentPage);
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
        this.setState({ starwarsChars: data.results});
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="Header">React Wars</h1>
        <Nav 
          next={this.nextPage} 
          previous={this.previousPage}
        />
        <CharacterCard 
          character={this.state.starwarsChars}
        />
        </div>
      </div>
    );
  }
}

export default App;
