import React, { Component } from 'react';
import './App.css';
import CharCard from './components/CharCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      prevPage: ''
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
        this.setState({ starwarsChars: data.results, nextPage: data.next, prevPage: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 onClick={this.state.nextPage === null ? 
          console.log('no next page listed') : ()=> this.getCharacters(this.state.nextPage)}>Next Page</h1>
        <h1 onClick={this.state.prevPage === null ? 
        console.log('no previous page listed') : ()=> this.getCharacters(this.state.prevPage) }>Previous Page</h1>

          
        {this.state.starwarsChars.map(char=> (
          <CharCard character={char} key={char.created}/>
        ))}
      </div>
    );
  }
}

export default App;
