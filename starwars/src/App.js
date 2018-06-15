import React, { Component } from 'react';
import './App.css';
import Card from './components/CardComponent';
import Button from './components/ButtonComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

displayCard = name => {
  let char = this.state.starwarsChars.slice();
  char = char.filter((character) => {
    return character.name === name;
  })
}

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='container'>
        <Card char={this.state.starwarsChars[0]} />
        <Card char={this.state.starwarsChars[1]} />
        <Card char={this.state.starwarsChars[2]} />
        <Card char={this.state.starwarsChars[3]} />
        <Card char={this.state.starwarsChars[4]} />
        <Card char={this.state.starwarsChars[5]} />
        <Card char={this.state.starwarsChars[6]} />
        <Card char={this.state.starwarsChars[7]} />
        <Card char={this.state.starwarsChars[8]} />
        <Card char={this.state.starwarsChars[9]} />
      </div>
      </div>
    );
  }
}

export default App;

//<Button name='Luke Skywalker' customStyleProp='Luke Skywalker' onClick={this.displayCard}/>