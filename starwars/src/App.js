import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/Cards/characterCard';
import PaginationFooter from './components/Pagination/PaginationFooter';
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previous :  '',
      next: ''
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
        this.setState({
          starwarsChars: data.results,
          previous: data.previous,
          next: data.next
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  paginationOnClick = (e) => {
    const pageCall = e.target.ariaLabel;
    console.log(pageCall)
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      {this.state.starwarsChars.map((character) => {
        return (
          <CharacterCard character={character} key={character.name}/>
        );
      })}
      <PaginationFooter onClick={this.paginationOnClick}/>
      </div>
    );
  }
}

export default App;
