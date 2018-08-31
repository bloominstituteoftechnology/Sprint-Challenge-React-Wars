import React, { Component } from 'react';
import './App.css';
import './components/StarWars.css';
import CharacterList from './components/CharacterCard/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      character: null
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

  // displayCard = name => {

  //   let characters = this.state.starwarsChars.slice();
    
  //   let string = '';
  //   characters = characters.forEach(character => {
  //     console.log(character.name);
  //     if(character.name === name){
  //       for (const [key, value] of Object.entries(character)) {
  //         string = (`${key} ${value}`);
          
  //       } 
  //       return (string);
  //       }
  //       this.setState({character:string});
  //     }
      
  //   );
   
  // }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters = {this.state.starwarsChars} displayCard = {this.displayCard} characteritem = {this.state.character}/>
      </div>
    );
  }
}

export default App;
