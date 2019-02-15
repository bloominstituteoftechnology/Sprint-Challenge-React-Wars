import React, { Component } from 'react';
import './reset.css'
import './App.css';
import StarWarsCharacters from './components/StarWarsCharacters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'https://swapi.co/api/people',
      starwarsChars: [],
      next: ''
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.page);
  }

  nextPage = () => {
    const nextPage = this.state.next;
    this.setState({
      page: nextPage
    })
    this.componentDidMount()
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
        this.setState({ starwarsChars: data.results })
        this.setState({ next: data.next })
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsCharacters characters={this.state.starwarsChars}/>
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
}

export default App;
