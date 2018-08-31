import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';

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
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          {this.state.previous ? (
            <div
              className="btn"
              onClick={() => this.getCharacters(this.state.previous)}
            >
              Previous
            </div>
          ) : null}
          {this.state.next ? (
            <div
              className="btn"
              onClick={() => this.getCharacters(this.state.next)}
            >
              Next
            </div>
          ) : null}
        </div>
        <CardContainer starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
