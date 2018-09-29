import React, { Component } from 'react';
import './App.css';
import Character from "./components/Character"

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      open: false ,
    };
  }

  openHandler = (cardId) =>{
    this.setState({
      starwarsChars: this.state.starwarsChars.map(character =>{
        if(character.created===cardId){
          return{
            open: !character.open,
            openHandler : character.openHandler,
            key : character.created,
            id : character.created,
            name: character.name,
            birth_year: character.birth_year,
            eye_color: character.eye_color,
            gender: character.gender,
            hair_color: character.hair_color,
            height: character.height,

          }

        } else{
          return character
        }
      })
    })

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
        <Character starwarsChars ={this.state.starwarsChars} openHandler={this.openHandler} open={this.state.open} />
      </div>
    );
  }
}

export default App;
