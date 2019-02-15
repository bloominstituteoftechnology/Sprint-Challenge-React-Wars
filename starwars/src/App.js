import React, { Component } from 'react';
import './App.css';
import './components/DataDisplay';
import DataDisplay from './components/DataDisplay';

if(localStorage.getItem('myData')===null){
  var data =[];
} else {
  data = JSON.parse(localStorage.getItem('myData'));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: data
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    if(this.state.starwarsChars.length === 0){
      console.log("fetched data");
      fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        data.results.map(ele => {
          ele.id = Date.now()
        })
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
    } else{
      console.log("using locally stored data");
    }
  };

  render() {
    localStorage.setItem('myData', JSON.stringify(this.state.starwarsChars));
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <DataDisplay items={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;

//items={this.state.starwarsChars[0].name}