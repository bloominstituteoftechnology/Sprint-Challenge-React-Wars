import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import Buttons from './components/Buttons';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage:'',
      previous:'',
      searchBarValue:''
    };
  }
  
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }
  
searchHandler = event =>{
  this.setState({
    searchBarValue:event.target.value
  })
}

  endHandler = event => {
    this.setState({
      starwarsChars: '',
    });
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
        // console.log(data);
        this.setState({ 
        starwarsChars: data.results,
        nextPage:data.next,
        previous:data.previous});
        // console.log(data.next);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler}/>
        <div className = "Header">
        <Buttons className = "Header__button" clickHandler={this.getCharacters} previous={this.state.previous}/>
        <h1 className="Header__text">React Wars</h1>
        <button className = "Header__button" onClick={()=> this.state.nextPage == null ? alert('This is the end') : this.getCharacters(this.state.nextPage)}>NextPage</button> 
        </div>
        <CharacterList listOfChar={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
