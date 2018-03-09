import React, { Component } from 'react';
import './App.css';
import Charcard from './Components/Charcard/Charcard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      idx: 0,
    };
  }
  right = () => {
    let newState = this.state.idx;
    if (newState < 9) newState++;
    else newState = 0;
    this.setState( {idx: newState})
}

left = () => {
    let newState = this.state.idx;
    if (newState > 0) newState--;
    else newState = 9;
    this.setState( {idx: newState})
}
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map(((char, index) => {
          return <Charcard chars={char} right={this.right} left={this.left} key={`${char}${index}`}/>
        }))}
      </div>
    );
  }
}

export default App;
