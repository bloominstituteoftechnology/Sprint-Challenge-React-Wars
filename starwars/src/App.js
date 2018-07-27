import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
        this.setState({ starwarsChars: data.results,
          next: data.next,
          previous: data.previous});
        console.log(data);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  next = () => {
    this.getCharacters(this.state.next);
  };

  previous = () => {
    this.getCharacters(this.state.previous);
  };

   render() {
    return (
      <div className="App">
        <div className="sticky-header">
          <h1 className="Header">React Wars</h1>
          <div className="d-flex justify-content-center">
            <div className="nav-btn left-button" onClick={this.previous}>Back</div>
            <div className="nav-btn right-button" onClick={this.next}>Next</div>
          </div>
        </div>
        <div className="core-content">
          <CharList charAttrib={this.state.starwarsChars}/>
        </div>       
      </div>
    );
  }
}

export default App;
