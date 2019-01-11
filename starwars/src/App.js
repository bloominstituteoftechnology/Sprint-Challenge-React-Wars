import React, { Component } from 'react';
import Characters from './components/Characters/Characters'
import Pages from './components/Pages/Pages'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: '',
      prevURL: '',
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
        console.log(data)
        this.setState({ starwarsChars: data.results , nextURL: data.next, prevURL: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = (e) => {
    if(this.state.nextURL === null){
      alert('You are already on the last page')
    }else {
      this.getCharacters(this.state.nextURL);
    }
  }

  previousPage = (e) => {
    if(this.state.prevURL === null){
      alert('You are already on the first page')
    }else{
      this.getCharacters(this.state.prevURL);
    }
  }


  render() {
    return (
      <div className="App">
        <Pages next={this.nextPage} previous={this.previousPage} currentPage={this.state.currentPage}/>
        <h1 className="Header">React Wars</h1>
        <Characters charData={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
