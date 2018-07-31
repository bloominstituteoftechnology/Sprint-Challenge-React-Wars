import React, { Component } from 'react';
import './App.css';

const Character = props => {
  return (
    <div className = "card-container">
      <div className = "card">
        <h3> Name: {props.character.name}</h3>
        <p> Born: {props.character.birth_year}</p>
        <p> Gender: {props.character.gender}</p>
        <p> Height: {props.character.height} cm</p> 
        <p> Mass: {props.character.mass} kg</p>
      </div>
    </div> 
  );
};


const Characters = props => {
  return (
    <div className = "Characters">
    {props.characters.map(character => <Character key = {character.name} character = {character} />)}
    </div>
  );
};



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
        console.log("Characters", this.state.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <Characters characters = {this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
