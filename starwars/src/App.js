import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      nextPage: '',
      previousPage: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
        console.log(data)
        this.setState({ starwarsChars: data.results, nextPage: data.next, previousPage: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  getNextPage = () => {
    if(this.state.nextPage === null) {
      this.getCharacters("https://swapi.co/api/people/")
    }
    if(this.state.nextPage !== null)
    this.getCharacters(this.state.nextPage)
  }

  getPreviousPage = () => {
    if(this.state.previousPage === null) {
      this.getCharacters("https://swapi.co/api/people/?page=9")
    }
    if(this.state.previousPage !== null)
    this.getCharacters(this.state.previousPage)
  }


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.getPreviousPage}>Previous Page</button>
        <button onClick={this.getNextPage}>Next Page</button>
        <CardContainer swData={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
