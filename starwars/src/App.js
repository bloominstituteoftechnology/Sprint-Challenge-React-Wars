import React, { Component } from 'react';
import './App.css';
import './components/StarWars.css';
import StarWarsMemes from './components/StarComponent1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      active: false,

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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };


  addNewClass = (id) => {
    const currentState = this.state.active;
    
        this.setState({   
          active: !currentState
        })

//active: !currentState
  }

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsMemes 
        starInfo = {this.state.starwarsChars}
        starToggle = {this.state.active}
        addNewClass = {this.addNewClass}
        changeHandler = {this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
