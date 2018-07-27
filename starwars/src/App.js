import React, { Component } from 'react';
import './App.css';
import StarWarsCard from './StarWarsCard.js';
import NextButton from './NextButton.js';
import PrevButton from './PreviousButton.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      data: {}
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
        this.setState({ starwarsChars: data.results,data:data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  Next=()=>{
    return this.getCharacters(this.state.data.next);
  }
  Previous=()=>{
    if (this.state.data.previous!==null) {
      return this.getCharacters(this.state.data.previous);
    }
  }
  render() {
    return (
      <div className="App">
        <StarWarsCard starProp={this.state.starwarsChars}/>
        <NextButton onClick={this.Next}/>
        <PrevButton onClick={this.Previous}/>
      </div>
    );
  }
}

export default App;
