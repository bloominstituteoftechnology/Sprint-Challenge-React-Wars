import React, { Component } from 'react';
import './App.css';

import CharacterCard from './components/CharacterCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous:''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.

    //return  if one of the URLs does not equal anything
    if(URL===null)return '';

    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
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

  //get next set of characters
  getNext = () =>{
    this.getCharacters(this.state.next)
  }

  // get previous set of characters
  getPrevious = () =>{
    this.getCharacters(this.state.previous)
  }

  render() {

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.getPrevious}>Previous</button>
        <button onClick={this.getNext}>Next</button>
        <div className="card-container">
          {this.state.starwarsChars.map((character,i)=>{
            return <CharacterCard key={i}  character={character} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
