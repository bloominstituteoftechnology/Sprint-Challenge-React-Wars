import React from 'react';
import './App.css';
import CharList from './components/CharList';
import CharCard from './components/CharCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentChar: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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

  showCurrentChar = name => {
    const currentChar = this.state.starwarsChars.find(char => char.name === name);
    console.log(currentChar);
    this.setState({ currentChar: currentChar });
  }

  returnToList = event => {
    this.setState({ currentChar: null })
  }

  render() {
    if (this.state.currentChar === null) {
      return (
        <div className="container">
          <h1>React Wars</h1>
          <CharList chars={this.state.starwarsChars} showCurrentChar={this.showCurrentChar} />
        </div>
      );
    } else {
        return ( <CharCard returnToList={this.returnToList} character={this.state.currentChar} />);
    }
  }
}

export default App;