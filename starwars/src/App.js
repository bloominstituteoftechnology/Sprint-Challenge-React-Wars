import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
//import {Card} from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      // currentPage: 1,
      // charsPerPage: 4,
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

handlePreviousClick = () => {
  this.getCharacters(this.state.previousURL);
}

handleNextClick = () => {
  this.getCharacters(this.state.nextURL);
}

  render() {
  // REMNANTS OF AN ALTERNATIVE STYLE FOR PAGINATION
  //   const indexOfLastCharacter = this.state.currentPage * this.state.charsPerPage;
  //   const indexOfFirstCharacter = indexOfLastCharacter - this.state.charsPerPage;
  //   const currentChars = this.state.starwarsChars.slice(indexOfFirstCharacter, indexOfLastCharacter);
  //   //Logic for displaying page numbers
  //   const pageNumbers = [];
  //   for (let i = 1; i <= Math.ceil(this.state.starwarsChars.length / this.state.charsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }
  //
  //   const renderPageNumbers = pageNumbers.map(number => {
  //     return (
  //     <li key={number} id={number} onClick={this.handleClick}>{number}</li>
  //   );
  // });

  // <ul className="page-numbers">{renderPageNumbers}</ul>

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.handlePreviousClick}>Prev</button>
        <button onClick={this.handleNextClick}>Next</button>
        <CharacterList listItems={this.state.starwarsChars}  />

      </div>
    );
  }
}

export default App;
