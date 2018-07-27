import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      displayedCharacter: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
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

  displayCharacter = name => {
    const displayedCharacter = this.state.starwarsChars.find(char => char.name === name);
    console.log(displayedCharacter);
    this.setState({ displayedCharacter: displayedCharacter })
  }

  returnToList = event => {
    this.setState({ displayedCharacter: null })
  }

  render() {
    if (this.state.displayedCharacter === null) {
    return (
      <div className="container">
        <h1>React Wars</h1>
        <CharacterList chars={this.state.starwarsChars}
                       displayCharacter={this.displayCharacter} />
      </div>
    );} else {return (
      <CharacterCard returnToList={this.returnToList}
                     character={this.state.displayedCharacter} />
    );}
  }
}

export default App;
