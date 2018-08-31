import React, { Component } from 'react';
import './App.css';
import CharCard from './components/CharCard';
//TODO: make a list of characters component

// TODO: make a specific character to display based upon chatacter name : I am thinking some sort of component with a 
// clickable name of char or something that allows us to click the link and display the stats or something

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // TODO: a way to get a character and return it :: fill out some more logic to set the state
  showCurrentChar = name => {
    // find the char that matches the name in the arguments
    const currentChar = this.state.starwarsChars.find(char => char.name === name);
    //test if it returns like expected
    console.log(currentChar);
    // TODO: set the state based on returned currentChar
  }


  // TODO: a method to get back to a list of characters



  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharCard character={{name: "Bob Skywalker"}} />
      </div>
    );
  }
}

export default App;
