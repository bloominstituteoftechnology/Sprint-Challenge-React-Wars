import React, { Component } from 'react';
import Characters from './components/characters'
import Buttons from './components/buttons'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.charHistory= [];
    this.state = {
      starwarsChars: [],
      sortParams: ['All', 'Skywalkers', 'Not Skywalkers', 'Humans', 'Droids'],
      
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  isSkywalker = () =>{
    let chars = this.state.starwarsChars;
    if (Object.keys(chars).includes('skywalker')){
      return;
    }
    for (let i = 0; i < chars.length; i++){
      if (chars[i].gender === 'n/a' || chars[i].name === 'Biggs Darklighter' || chars[i].name === 'Obi-Wan Kenobi'){
        chars[i].skywalker = false;
      } else{
        chars[i].skywalker = true;
      }
    }
    this.setState({starwarsChars: chars})
  }

  updateCharHistory = () =>{
    this.isSkywalker()
    if (this.charHistory.length){
      return
    }
    this.charHistory.push(Object.assign([],this.state.starwarsChars))
  }

  sort = e =>{
    let button = e.target.innerText;
    this.updateCharHistory();
    let storedChars = this.charHistory[0];
    let sortedChars;
    if (button === 'All'){
      sortedChars = storedChars;
    }
    if (button === 'Skywalkers'){
      sortedChars =storedChars.filter(char => (char.skywalker))
    }
    if (button === 'Not Skywalkers'){
      sortedChars =storedChars.filter(char => !(char.skywalker))
    }
    if (button === 'Humans'){
      sortedChars =storedChars.filter(char => (char.gender !== 'n/a'))
    }
    if (button === 'Droids'){
      sortedChars =storedChars.filter(char => (char.gender === 'n/a'))
    }
    
    this.setState({starwarsChars: sortedChars})
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters chars={this.state.starwarsChars}  />
        <Buttons params={this.state.sortParams} sort={this.sort}/>
      </div>
    );
  }
}

export default App;
