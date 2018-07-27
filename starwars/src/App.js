import React, { Component } from 'react';
import './App.css';
import StarCard from './components/StarCard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      previous: ""
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    if(URL === null){
      return;
    }
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ starwarsChars: data.results, next: data.next, previous: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  expand = (e) =>{
   e.target.nextElementSibling.classList.toggle('hidden');
  }

  render() {
    return (
      <div className="App crt">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map((Element)=>{
          // return JSON.stringify(Element);
          return <StarCard methods={this.expand} data={Element} />
        })}

        <div className="buttonBar">
          <button onClick={this.getCharacters.bind(this, this.state.previous)} className="navButton" id="previous">Previous Page</button>
          <button onClick={this.getCharacters.bind(this, this.state.next)} className="navButton" id="next">Next Page</button>
        </div>
      </div>
    );
  }
}

export default App;
