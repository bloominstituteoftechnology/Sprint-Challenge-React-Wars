import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      }).then(data => {
        this.setState({ starwarsChars: data.results });
      }).catch(err => {
        throw new Error(err);
      });
  }
  fetchData(url) {
    fetch(url)
      .then(res => {
        return res.json();
      }).then(data => {
        console.log( data.results );
      }).catch(err => {
        throw new Error(err);
      });
    // // Expose second layer urls
    // this.state.startwarsChars.forEach((char) => {
    //   char.map((prop) => {
    //   if (typeof(prop) === 'string' && prop.slice(0, 5) === 'https') {
    //       fetch(prop)
    //       .then(res => {
    //         return res.json();
    //       })
    //       .then(data => {
    //         console.log(data.results);
    //         //this.setState({ char: data.results });
    //       })
    //       .catch(err => {
    //         throw new Error(err);
    //       });
    //     }
    //   })
    // });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Card chars={this.state.starwarsChars} fetchData={this.fetchData}/>
      </div>
    );
  }
}

export default App;
