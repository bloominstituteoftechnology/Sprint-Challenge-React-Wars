import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import Down from './components/Down';
import Up from './components/Up';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      counter: 1,
      classes: "toggle",
      classes2: "",
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  upURL = event => {
    event.preventDefault();
    let newState = this.state;
    if (newState.counter === 7){
      newState.counter = newState.counter + 1;
      newState.classes2 = "toggle";
    }
    newState.classes = "";
    newState.counter = newState.counter + 1;
    newState = this.getCharacters(`https://swapi.co/api/people/?page=${newState.counter}`); 
  }
  downURL = event => {
    event.preventDefault();
    let newState = this.state;
    if (newState.counter === 2){
      newState.counter = newState.counter - 1;
      newState = this.getCharacters(`https://swapi.co/api/people/?page=${newState.counter}`); 
      this.setState(newState);
      this.state.classes = "toggle";
    } else {
      newState.counter = newState.counter - 1;
      newState = this.getCharacters(`https://swapi.co/api/people/?page=${newState.counter}`);
      this.setState(newState);
      this.state.classes2 = ""; 
    }
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
        <Down down={this.downURL} classes={this.state.classes} />
        <Up up={this.upURL} classes2={this.state.classes2} />
        <h1 className="Header">React Wars</h1>
        <ItemList items={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;