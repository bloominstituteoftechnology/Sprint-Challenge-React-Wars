import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogArr:[]
    };
  }

  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breeds/list/all');
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
        this.setState({dogArr: Object.keys(data.message)});
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  render() {
    return (
      <div className="dogbreeds">
        <h1>Known dog breeds:</h1>
        {this.state.dogArr.map((e)=> <h3 className='text-flow'>{e}</h3>)}
      </div>
    );
  }
}

export default App;
