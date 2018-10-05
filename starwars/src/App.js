import React, { Component } from 'react';
import './App.css';
import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNextCharacters = () => {
    fetch(`https://swapi.co/api/people?page=${this.state.page + 1}`)
      .then(res => {
        return res.json();  
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, page: this.state.page + 1 });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getPrevCharacters = () => {
    fetch(`https://swapi.co/api/people?page=${this.state.page - 1}`)
      .then(res => {
        return res.json();  
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, page: this.state.page - 1 });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.getPrevCharacters}>&lt;&lt; Previous Characters</button>
        <button onClick={this.getNextCharacters}>Next Characters &gt;&gt;</button>
        <div className="cards">
          {this.state.starwarsChars.map((char,i) => <Character char={char} key={i} />)}
        </div>
      </div>
    );
  }
}

export default App;
