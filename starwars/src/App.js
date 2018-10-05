import React, { Component } from 'react';
import './App.css';
import ListChars from './components/ListChars';
import EachChars from './components/EachChar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentChar: null,
      nextPage: null,
      prevPage: null
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
        this.setState({ starwarsChars: data.results, nextPage: data.next, prevPage: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  showNextPage = event => {
    if(this.state.nextPage !== null) {
      const newData = this.getCharacters(this.state.nextPage);
      console.log(newData);
    }
  }

  
  showPrevPage = event => {
    if(this.state.prevPage !== null) {
      const newData = this.getCharacters(this.state.prevPage);
      console.log(newData);
    }
  }

  showCurrentChar = name => {
    const currentChar = this.state.starwarsChars.find(char => char.name === name);
    this.setState({currentChar: currentChar});
  }

  backToList = event => {
    this.setState({currentChar: null});
  }

  render() {
    if (this.state.currentChar === null) {
      return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
          <div className='charList'>
            <ListChars chars={this.state.starwarsChars} 
              showCurrentChar={this.showCurrentChar} 
              showNextPage={this.showNextPage}
              showPrevPage={this.showPrevPage}
              nextPage={this.state.nextPage}
              prevPage={this.state.prevPage}
            />
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <EachChars backToList={this.backToList} character={this.state.currentChar} />
        </div>
      )
    }
  }
}

export default App;
