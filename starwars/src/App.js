import React, { Component } from 'react';
import './App.css';
import ListOfCharCards from './components/ListOfCharCards';
import CharacterForm from './components/CharacterForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
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


  // // toggle completed todos
  // toggleCompletedChars= name => {
  //   let starwarsChars = this.state.starwarsChars.slice();
  //   starwarsChars = starwarsChars.map(char => {
  //     // if the todoData element id
  //     // equals the id of the one we click
  //     // we change to the opposite of what 
  //     // it is, true to false, f to t
  //     if (char.name === name) {
  //       char.toggled = !char.toggled;
  //       return char;
  //     } else {
  //       return char;
  //     }
  //   });
  //   this.setState({ starwarsChars });
  // };

  // handleUpdateState = event => {
  //   event.preventDefault();
  //   const starwarsChars = this.state.starwarsChars.slice();
  //   // clone our state starwarsChars array.
  //   starwarsChars.push({
  //     name: this.state.name,
  //     id: Date.now(),
  //     completed: true
  //   });
  //   this.setState({ starwarsChars, toggled: true});
  // };

  render() {
    return (
      <div className="App">
        <CharacterForm handleToggleCard={this.handleUpdateState} />
        <ListOfCharCards 
          starwarsArray={this.state.starwarsChars} 
          handleCompletedChars={this.toggleCompletedChars}
        />
      </div>
    );
  }
}

export default App;
