import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }
  /********** Fetch call in question **********/
  // url = this.state.starwarsCharacters.homeplanet =
    // https://swapi.co/api/planets/{planet-index}/
  // char = this.state.starwarsCharacters.{someChatacter}
  // index = index of char
  fetchHomeworldData(url, char, index) {
    fetch(url)
      .then(res => {
        return res.json();
      }).then(data => {
        // Tried to set up a new property in each character object
        char.homeworldJSON = data;
      }).catch(err => {
        throw new Error(err);
      });
  }
  // Funniest thing is that it shows up in state when checking react dev tools
  // But I cannot access through standard dot syntax
  /********************************************/
  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(res => {
        return res.json();
      }).then(data => {
        this.setState({ starwarsChars: data.results });
      }).catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Card chars={this.state.starwarsChars} fetchHomeworldData={this.fetchHomeworldData}/>
      </div>
    );
  }
}

export default App;
