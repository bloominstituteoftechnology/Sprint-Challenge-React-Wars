import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      count: 0,


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
        // console.log(data); 
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  checkTheState = () => {
    // console.log(this.state.starwarsChars); 
  }
  handleNext = () => {
    let count = this.state.count;
    if(count + 1 <= this.state.starwarsChars.length){
      count++;
    } else {
      count = 0; 
    }
     
    this.setState({count:count});
  }

  handlePrevious = () => {
    let count = this.state.count; 

    if(count - 1 > 0){
      count--;
    } else {
      count = this.state.starwarsChars.length -1; 
    }

    this.setState({count:count}); 
  }

  handlePageChange = page => {
    let count = this.state.count;
    count = page; 
    this.setState({count:count}); 
  }



  render() {
    let characters = this.state.starwarsChars; 
    console.log(this.character);

    
    
    
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {/* <h5 onClick = {this.checkTheState}>Click to check State</h5> */}
        <div className="characters">
          {/* {characters.map( character => <Card key= {character.created} name ={character.name} created = {character.created} edited={character.edited}
          eyeColor = {character.eye_color} gender ={character.gender} hairColor ={character.hair_color} height = {character.height} mass = {character.mass}
          skinColor ={character.skin_color} birthYear = {character.birth_year}/> )  } */}
          {/* {<Card   key= {characters[this.state.count].created} name ={characters[this.state.count].name} created = {characters[this.state.count].created} edited={characters[this.state.count].edited}
          eyeColor = {characters[this.state.count].eye_color} gender ={characters[this.state.count].gender} hairColor ={characters[this.state.count].hair_color} height = {characters[this.state.count].height} mass = {characters[this.state.count].mass}
          skinColor ={characters[this.state.count].skin_color} birthYear = {characters[this.state.count].birth_year}/>  } */}

          <Card   name = {characters.length > 0? characters[this.state.count].name: ""} key = {characters.length > 0? characters[this.state.count].created: ""} 
           edited = {characters.length > 0? characters[this.state.count].edited: ""} eyeColor =  {characters.length > 0? characters[this.state.count].eye_color: ""} 
           gender =  {characters.length > 0? characters[this.state.count].gender: ""} hairColor =  {characters.length > 0? characters[this.state.count].hair_color: ""}
           mass =  {characters.length > 0? characters[this.state.count].mass: ""} skinColor =  {characters.length > 0? characters[this.state.count].skin_color: ""}
           birthYear =  {characters.length > 0? characters[this.state.count].birth_year: ""}
           
           
           />

        </div>
        <button onClick = {this.handlePrevious}>Previous</button>
        <button onClick = {this.handleNext}>Next</button>
        <div className="pages">
          <button onClick = {() => this.handlePageChange(0)}>1</button><button onClick = {() => this.handlePageChange(1)}>2</button><button onClick = {() => this.handlePageChange(2)}>3</button><button onClick = {() => this.handlePageChange(3)}>4</button><button onClick = {() => this.handlePageChange(4)}>5</button><button onClick = {() => this.handlePageChange(5)}>6</button><button onClick = {() => this.handlePageChange(6)}>7</button><button onClick = {() => this.handlePageChange(7)}>8</button><button onClick = {() => this.handlePageChange(8)}>9</button><button onClick = {() => this.handlePageChange(9)}>10</button>
        </div>
      </div>
    );
  }
}

export default App;
