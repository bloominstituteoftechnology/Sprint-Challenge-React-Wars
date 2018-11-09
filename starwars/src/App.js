import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage:''
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
        console.log(data);
        this.setState({ starwarsChars: data.results,
        nextPage:data.next });
        console.log(data.next);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className = "Header">
        <button className = "Header__button">Go Back</button>
        <h1 className="Header__text">React Wars</h1>
        <button className = "Header__button" >NextPage</button>
        </div>
        <CharacterList listOfChar={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
