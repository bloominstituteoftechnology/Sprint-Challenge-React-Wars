import React, { Component } from 'react';
import './App.css';
import StarwarsList from './components/StarwarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      num: 1,
      startpage: `https://swapi.co/api/people/?page=`,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/?page=' + this.state.num);
    // Stretch Goal
    // console.log(this.state.starwarsChars);
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
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.setState({num: this.state.num + 1 });
    fetch(`${this.state.startpage}${this.state.num}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data)
      console.log(data.next);
      this.getCharacters(data.next);
    })
    .catch(err => {
      throw new Error(err);
    });
  }

  prevPage = () => {
    this.setState({num: this.state.num + -1 });
    fetch(`${this.state.startpage}${this.state.num}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      // stretch
      this.getCharacters(data.previous);
      // this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      console.error(new Error(err));
      throw new Error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.prevPage}>Previous Page</button>
        <button onClick={this.nextPage}>Next Page</button>
        <h1 className="Header">React Wars</h1>
        <StarwarsList charactersData={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
