import React, { Component } from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import Form from './components/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      searchedCharacter: ""
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that  data and resolve it our state.
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

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  buttonClick = event => {
    event.preventDefault()
    let characterSearched = [...this.state.starwarsChars]
    characterSearched = characterSearched.filter(item => item.name === this.state.searchedCharacter)
    this.setState({starwarsChars: characterSearched})
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Form 
          inputChange={this.inputChange}
          searchedCharacter={this.state.searchedCharacter}
          buttonClick={this.buttonClick}
        />
        <MainComponent 
          propsData={this.state.starwarsChars}
          newData={this.state.searchedCharacter}
        />
      </div>
    );
  }
}

export default App;
