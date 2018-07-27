import React, { Component } from 'react';
import './App.css';

import Card from './components/Card/Card'
import Pagination from './components/Pagination/Pagination'

function next (state, props) {
  return {
    url: state.nextUrl
  };
};

function prev (state, props) {
  return {
    url: state.prevUrl
  }; 
};

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      starwarsChars: [],
      url: 'https://swapi.co/api/people/?page=1',
      nextUrl: null,
      prevUrl: null
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    console.log('Fetching: ', this.state.url);
    fetch(this.state.url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ nextUrl: data.next });
        this.setState({ prevUrl: data.previous });
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleNext() {
    this.setState(next, this.getCharacters);
  }

  handlePrev() {
    this.setState(prev, this.getCharacters);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">React Wars</h1>
        {/* <p>{JSON.stringify(this.state.starwarsChars)}</p> */}
        <Pagination 
          next={this.handleNext.bind(this)}
          prev={this.handlePrev.bind(this)}  
        />
        <Card starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
