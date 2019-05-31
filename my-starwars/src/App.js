import React, { Component } from 'react';
import Characters from './components/Characters';
import Pages from './components/Pages';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      url: 'https://swapi.co/api/people/?page=',
      current: 1,
      firstPage: 'https://swapi.co/api/people/'
    };
  }

  nextPage = (url, current) => {
    this.getCharacters(`${url}${current + 1}`)
    this.setState({ current: this.state.current + 1 })
  }

  prevPage = (url, current) => {
    this.getCharacters(`${url}${current - 1}`)
    this.setState({ current: this.state.current - 1 })
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
        console.log(res)
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
    
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pages 
          url = { this.state.url }
          current = { this.state.current }
          nextPage = { this.nextPage }
          prevPage = { this.prevPage }
        />
        <Characters
          characters = { this.state.starwarsChars }
        />
      </div>
    );
  }
}

export default App;
