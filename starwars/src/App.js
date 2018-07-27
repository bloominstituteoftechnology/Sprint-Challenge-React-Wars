import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

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

  checkTheState = () => {
    console.log(this.state); 
  }


  render() {
    let characters = this.state.starwarsChars;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        {characters.map( character => <Card key= {character.created} name ={character.name} created = {character.created} edited={character.edited}
        eyeColor = {character.eye_color} gender ={character.gender} hairColor ={character.hair_color} height = {character.height} mass = {character.mass}
        checkTheState ={this.checkTheState} skinColor ={character.skin_color}/> )  }
      </div>
    );
  }
}

export default App;
