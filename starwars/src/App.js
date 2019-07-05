import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      url: null
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
        console.log(data)
        this.setState({ 
          starwarsChars: data.results,
          url: data.next
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePageChange (){
    console.log(this.state.url)
    this.getCharacters(this.state.url)
  }

  render() {
    const data = this.state.starwarsChars.map(character => <Card data={character} />)
    return (
      <div className="App">
        <div className="Header">React Wars</div>
        <div className="data">
          {data}
          <button onClick={this.handlePageChange.bind(this)}>Next Page</button>
        </div>
      </div>
    );
  }
}

export default App;
