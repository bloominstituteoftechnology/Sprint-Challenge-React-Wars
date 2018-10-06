import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters';
import CharacterData from './components/Characters-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }

  //In React, lifecycle methods including “Will” are called before something happens. Lifecycle methods including “Did” are called after something happens.

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
        this.setState ({starwarsChars: data.results});
        
      })
        
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
<Characters characterData= {this.state.starwarsChars} />

      </div>
    );
  }
}

export default App;



//In the constructor method, we only have to worry about two things. Once we call the constructor method, we use super to pass any props from the parent to the child component. 

//Then we set the state. When you set the initial state, you want to set it as empty, or blank. 
//If it’s going to be a string, it would be an empty string. If an array, an empty array, etc.

