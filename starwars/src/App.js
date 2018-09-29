import React, { Component } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';
import PreviousButton from './components/PreviousButton';
import NextButton from './components/NextButton';

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
        this.setState({ starwarsChars: data.results, data: data });
        console.log(data)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  Next = () => {
    if (this.state.data.next !== null) {
      return this.getCharacters(this.state.data.next)
    }
  }

  Previous = () => {
    if (this.state.data.previous !== null) {
      return this.getCharacters(this.state.data.previous)
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardComponent starwarsChars={this.state.starwarsChars}/>
        <div className="nav-buttons">
          <PreviousButton onClick={this.Previous} />
          <NextButton onClick={this.Next} />
        </div>
      </div>
    );
  }
}

export default App;
