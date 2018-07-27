import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      prevPage: '',
      nextPage: ''
    };
    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    console.log('called with url: ', URL);
    if (URL.length>0) {
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (data.next) {
            this.setState({ nextPage: data.next });
          }
          if (data.previous) {
            this.setState({  prevPage: data.previous});
          }
          this.setState({ starwarsChars: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
      }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars chars={this.state.starwarsChars} getCharacters={this.getCharacters} nextPage={this.state.nextPage} prevPage={this.state.prevPage} />
      </div>
    );
  }
}

export default App;
