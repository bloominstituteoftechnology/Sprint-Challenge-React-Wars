import React, { Component } from 'react';
import './App.css';
import Char from './components/Char';
import Button from './components/Button';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: '',
      prevURL: '',
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
        this.setState({
          starwarsChars: data.results, nextURL: data.next, prevURL: data.previous
  });
        console.log('data: ', data.previous);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleClick = (url) => {
     url=this.state.nextURL
    this.getCharacters(url)
  }
  handlePrevClick = (url) => {
     url=this.state.prevURL
    this.getCharacters(url)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Char passedPropToChar={this.state.starwarsChars} />
        <Button onclickProp={this.handleClick} onclickPropPrev={this.handlePrevClick} />
      </div>
    );
  }
}

export default App;
