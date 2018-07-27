import React, { Component } from 'react';
import './App.css';
import PeopleList from './components/PeopleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      descriptions: ['Local Hero', 'Helper Bot', 'Useful Droid', 'Dark Lord', 'Princess in Charge', 'Hero\'s Uncle', 'Hero\'s Aunt', 'Shabby Droid', 'X-Wing Fighter', 'Hero\'s Mentor']
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {

    // this.setState({[this.state.starwarsChars[0]]: 'Hero' });
    console.log(this.state.starwarsChars[0]);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="container">
          <PeopleList array={this.state.starwarsChars} array2={this.state.descriptions} />
        </div>
      </div>
    );
  }
}

export default App;
