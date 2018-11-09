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
      nextUrl: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  componentDidUpdate() {
    if (this.state.nextUrl) {
      this.getCharacters(this.state.nextUrl);
    }
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
        this.setState({ 
          starwarsChars: [...this.state.starwarsChars, ...data.results],
          nextUrl: data.next,
        });
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
                char => <Card key={generateID()} char={char}/>
              )
          }
        </div>
      </div>
    );
  }
}

// helper function 
const generateID = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

export default App;