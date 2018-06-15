import React, { Component } from 'react';
import CardDisplay from './components/CardDisplay.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    this.handleClick = this.handleClick.bind(this);
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
        let newData = data.results.map((datum) => {
          let dataCopy = Object.assign({hidden: true}, datum);
          return dataCopy;
        });
        newData[3].hidden = false;
        this.setState({ starwarsChars: newData });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

 handleClick (event) {
    let id = event.currentTarget.attributes.id.value;
    let charArr = this.state.starwarsChars;
    let newCharArr = charArr.map((char) => {
      let newChar = Object.assign({}, char);
      if (newChar.name === id) {
        newChar.hidden = !newChar.hidden;
      }
      return newChar;
    });
    this.setState( {starwarsChars: newCharArr});
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Meet</h1>
        <CardDisplay chars={this.state.starwarsChars} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
