import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';


const Character = props => {
  return (
    <div className="characterList">
      <h1>Testing: {props.starwarsChars} </h1>
    </div>
    
  )
}

const Card = props => {
  return <h1>Testing</h1>
}


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

  handleUpdateState = () => {
    // clone state into our array, so as to not mutate the original
    const starwarsChars = this.state.starwarsChars.slice();
    console.log(starwarsChars);
    // so then! update the state!
    this.setState({ starwarsChars: starwarsChars });
    {console.log(this.state.starwarsChars[0])}
  };

  

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
