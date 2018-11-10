import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import Pages from './components/Pages';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPageURL: '',
      previousPageURL: '',
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
        console.log(data.previous);
        this.setState({ starwarsChars: data.results, nextPageURL: data.next, previousPageURL: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = ev => {
    ev.preventDefault();
    this.getCharacters(this.state.nextPageURL);
    }

    previousPage = ev => {
      ev.preventDefault();
      if(this.state.previousPageURL === null) {
        return null;
      } else
        return this.getCharacters(this.state.previousPageURL);
    }


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <Pages nextPage={this.nextPage} previousPage={this.previousPage}  />

        <CharacterList
          charList={this.state.starwarsChars} 
        />


      </div>
    );
  }
}

export default App;
