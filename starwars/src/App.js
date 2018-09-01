import React, { Component } from 'react';
import './App.css';
import CharButton from './components/CharButton.js';
import List from './components/List.js';
class App extends Component {
  constructor(props) {
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (

      <div className="App">
        <h1 className="Header">React Wars</h1>
        <List  height={this.state.starwarsChars}/>

        <CharButton nameprops = {this.state.starwarsChars} />


      </div>
    );
  }
}

export default App;
