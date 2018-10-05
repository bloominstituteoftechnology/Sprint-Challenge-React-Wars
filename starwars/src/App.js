import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous: null
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
        console.log(data);
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

  handleButtonClick = e => {
    if (e.target.textContent === 'next') {
      this.getCharacters(this.state.next);
    } else if (e.target.textContent === 'prev') {
      this.getCharacters(this.state.previous);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map((character, i) => {
          return <Card character={character} key={i} />;
        })}
        <Button
          handleButtonClick={this.handleButtonClick}
          name="prev"
          disabled={!this.state.previous}
        />
        <Button
          handleButtonClick={this.handleButtonClick}
          name="next"
          disabled={!this.state.next}
        />
      </div>
    );
  }
}

export default App;
