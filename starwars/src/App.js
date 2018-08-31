import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import Down from './components/Down';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      counter: 1,
      classes: "toggle",
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  upURL = event => {
    event.preventDefault();
    let newState = {...this.state};
    this.state.classes = "";
    this.state.counter = this.state.counter + 1;
    newState = this.getCharacters(`https://swapi.co/api/people/?page=${this.state.counter}`); 
    console.log(this.state.counter);
    this.setState({...newState});
  }
  downURL = event => {
    event.preventDefault();
    let newState = {...this.state};
    console.log(this.state.counter);
    if (this.state.counter === 2){
      this.state.counter = this.state.counter - 1;
      newState = this.getCharacters(`https://swapi.co/api/people/?page=${this.state.counter}`); 
      this.setState({...newState});
      this.state.classes = "toggle";
    } else {
      this.state.counter = this.state.counter - 1;
      newState = this.getCharacters(`https://swapi.co/api/people/?page=${this.state.counter}`); 
      this.setState({...newState});
    }
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

  render() {
    return (
      <div className="App">
        <Down down={this.downURL} classes={this.state.classes} />
        <button onClick={this.upURL}>Next Page</button>
        <h1 className="Header">React Wars</h1>
        <ItemList items={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;