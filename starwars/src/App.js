import React from 'react';
import './App.css';
import CharList from './components/CharList';
import CharCard from './components/CharCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentChar: null,
      nextPage: ""
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
        console.log(data); 
        this.setState({ starwarsChars: data.results, nextPage: data.next});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  showNextPage = event => {


    const newData = this.getCharacters(this.state.nextPage);
    console.log(newData);
  }

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
          <h1 className="Header">React Wars</h1>
          <div className="charList">
            <CharList chars={this.state.starwarsChars} showCurrentChar={this.showCurrentChar} showNextPage={this.showNextPage} nextPage={this.state.nextPage} />
          </div>
        </div>
      );
    } else {
        return ( 
          <div className="container">
            <CharCard returnToList={this.returnToList} character={this.state.currentChar}/>
          </div>
        );
    }
  }
}

export default App;