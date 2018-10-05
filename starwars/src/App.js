import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previous: '',
      next: ''
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
          previous: data.previous,
          next: data.next
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = event => {
    event.preventDefault();

    if (this.state.next !== null) {
      this.getCharacters(this.state.next);
    }
  }

  previousPage = event => {
    event.preventDefault();

    if (this.state.previous !== null) {
      this.getCharacters(this.state.previous);
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          {/* <h1 className="heading">React Wars</h1> */}
          <img className="heading-img" src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" alt="star wars logo"/>
        </header>

        <div className="list-container">
          <CharacterList characters={this.state.starwarsChars} />
          <Pagination previousPage={this.previousPage} nextPage={this.nextPage}/>
        </div>

      </div>
    );
  }
}

export default App;
