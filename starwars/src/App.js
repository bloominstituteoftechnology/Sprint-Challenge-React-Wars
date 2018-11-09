import React, { Component } from 'react';
import './App.css';

// import components
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      inputText : '',
      sorted: false,
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

  onTextChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <input type="text" onChange={ e => this.onTextChange(e)} placeholder="Filter character" /><br/>
        <div className="card--container">
          { 
            this.state.starwarsChars
              .filter(
                char => {
                  return (
                    char.name.toLowerCase().includes(this.state.inputText.toLowerCase()) ||
                    char.gender.toLowerCase().includes(this.state.inputText.toLowerCase()) ||
                    char.birth_year.toLowerCase().includes(this.state.inputText.toLowerCase())
                    ) 
                }
              )
             .map(
                char => <Card key={Date.now() + Math.random()} char={char}/>
              )
          }
        </div>
      </div>
    );
  }
}

export default App;