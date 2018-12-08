import React, { Component } from 'react';
import CharList from './components/CharsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextUrl: "",
      prevUrl: "",
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
          starwarsChars: data.results ,
          nextUrl: data.next,
          prevUrl: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNext = () => {
    if(this.state.nextUrl) {
      this.getCharacters(this.state.nextUrl);
    }
  }

  getPrev = () => {
    if(this.state.prevUrl) {
      this.getCharacters(this.state.prevUrl);
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharList chars={this.state.starwarsChars}/>
        <button onClick={this.getNext}>Next</button>
        <button onClick={this.getPrev}>Previous</button>
      </div>
    );
  }
}

export default App;
