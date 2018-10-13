import React, { Component } from 'react';
import StarWarsList from './components/StarWarsList';



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      style: "no-card"
    };
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  showCharCard = index => {
    console.log("card launched", index);
    this.setState({
      starwarsChars: this.state.starwarsChars.map((char, idx)=> {
        if(index !== idx){
          return char;
        }else{
          return {
            ...char,
            style: char.style === "character-card" ?  "no-card" : "character-card"
          }
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header-title">
            <h1 className="title">React Wars</h1>
        </div>
        <StarWarsList characters={this.state.starwarsChars} card={this.showCharCard} classStyle={this.state.style}/>
      </div>
    );
  }
}

export default App;
