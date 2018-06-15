import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [
      ],
      page: 1
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it in our state.
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

  updateChars = (prevOrNext) => {
    // We only have 9 pages of character info
    let newPage = this.state.page;
    if(prevOrNext === 'prev'){
      newPage - 1 < 1 ? newPage = 9 : newPage--;
    }
    else{
      newPage + 1 > 9 ? newPage = 1 : newPage++;
    }
    this.setState({page: newPage});
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={() => this.updateChars('prev')}>previous</button> <button onClick={() => this.updateChars('next')}>next</button>
        <CardList charsList={this.state.starwarsChars} />
      </div>
    );
  }
  }

export default App;
