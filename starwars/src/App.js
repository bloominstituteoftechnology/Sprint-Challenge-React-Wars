import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      count: 0,
      page: 1,
      films: []


    };
    this.character = this.state.starwarsChars[this.state.count];
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
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
        //console.log(data); 
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  

  checkTheState = () => {
    console.log(this.state.starwarsChars); 
  }
  handleNext = () => {
    let page = this.state.page; 

    if (page + 1 !== 88){
      page++;
    } else {
      page = 1; 
    }
    let url = 'https://swapi.co/api/people/'
    url += "?page=" + page.toString()

    this.getCharacters(url);
    this.setState({page: page});
  }

  handlePrevious = () => {
    let page = this.state.page; 

    if (page - 1 !== 0){
      page--;
    } else {
      page = 87; 
    }
    let url = 'https://swapi.co/api/people/'
    url += "?page=" + page.toString()

    this.getCharacters(url);
    this.setState({page: page});
  }

  handlePageChange = page => {
    let count = this.state.count;
    count = page; 
    this.setState({count:count}); 
  }

  render() {
    let characters = this.state.starwarsChars; 
    //console.log(characters[0]);
    
    return (
      <div className="App">
        
        <h1 className="Header">React Wars</h1>
        <h5 onClick = {this.checkTheState}>Click to check State</h5>
        <button onClick = {this.handlePrevious}>Previous</button>
        <button onClick = {this.handleNext}>Next</button>
        <div className="characters">

          {characters.map( character => <Card key= {character.created} name ={character.name} created = {character.created} edited={character.edited}
        eyeColor = {character.eye_color} gender ={character.gender} hairColor ={character.hair_color} height = {character.height} mass = {character.mass}
        skinColor ={character.skin_color} birthYear = {character.birth_year} films = {character.films} species = {character.species[0]} homeWorld = {character.homeworld}
        starShips = {character.starships} vehicles = {character.vehicles}/> )  }
        

           
          

        </div>
        <button onClick = {this.handlePrevious}>Previous</button>
        <button onClick = {this.handleNext}>Next</button>
      </div>
    );
  }
}

export default App;
