import React, { Component } from 'react';
import './App.css';
import ListCharacter from './components/ListCharacter';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      prev: null,
      indexStart: 0,
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
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          prev: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNextCharacters = () => {
    let index = this.state.indexStart + 10;
    this.setState({ indexStart: index });
    this.getCharacters(this.state.next);
  };

  getPrevCharacters = () => {
    let index = this.state.indexStart - 10;
    this.setState({ indexStart: index });
    this.getCharacters(this.state.prev);
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="container">
          <Pagination
            next={this.state.next}
            prev={this.state.prev}
            getNext={this.getNextCharacters}
            getPrev={this.getPrevCharacters}
          />
          <ListCharacter
            characters={this.state.starwarsChars}
            indexStart={this.state.indexStart}
          />
        </div>
      </div>
    );
  }
}

export default App;
