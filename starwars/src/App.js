import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Button from './components/button';
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''
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
          previous: data.previous
        });
      })
      
      .catch(err => {
        throw new Error(err);
      });
  };
  nextPage = ev =>{
    ev.preventDefault();
    console.log(this.state);
    this.getCharacters(this.state.next);
  }
  prevPage = ev =>{
    ev.preventDefault();
    console.log(this.state);
    this.getCharacters(this.state.previous);
  }

  render() {
    return (
      
      <div className="App">
        < Button 
          nextPage = {this.nextPage}
          prevPage = {this.prevPage}
        /> 
        <h1 className="Header">React Wars</h1>
        <CharacterList 
          starwarsChars = {this.state.starwarsChars}
        />
      </div>
      
    );
  }
}

export default App;
