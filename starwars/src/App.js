import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;


// birth_year:
// "19BBY"
// created:
// "2014-12-09T13:50:51.644000Z"
// edited:
// "2014-12-20T21:17:56.891000Z"
// eye_color:
// "blue"
// films:
// Array[5]
// gender:
// "male"
// hair_color:
// "blond"
// height:
// "172"
// homeworld:
// "https://swapi.co/api/planets/1/"
// mass:
// "77"
// name:
// "Luke Skywalker"
// skin_color:
// "fair"
// species:
// Array[1]
// starships:
// Array[2]
// url:
// "https://swapi.co/api/people/1/"
// vehicles:
// Array[2]