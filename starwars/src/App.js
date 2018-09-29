import React, { Component } from 'react';
import CardList from './components/CardList'
import './App.css';
import 'react-scrollbar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    this.getCharacters= this.getCharacters.bind(this);
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
        console.log(data)
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state.starwarsChars)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardList 
        starwarsChars = {this.state.starwarsChars} 
        stylecardlist = 'cardlist'
        stylecard = 'card'
        />
      </div>
    );
  }
}

export default App;
