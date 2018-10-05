import React, { Component } from 'react';
import './App.css';
import Card from './components/card'

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://swapi.co/api/people',
      starwarsChars: [],
      next: '',
      previous: '',
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.url);
  }

   previousPage = () => {
    if (this.state.previous !== null) {
      this.getCharacters(this.state.previous);
    }
  }

  nextPage = () => {
    if (this.state.next !== null) {
      this.getCharacters(this.state.next);
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
        console.log(data);
        this.setState({ starwarsChars: data.results, next: data.next, previous: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="cards">
          {this.state.starwarsChars.map((char, i) => <Card key={i} char={char}/>)}
        </div>
        <div className="pageButtons">
          <button onClick={this.previousPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
