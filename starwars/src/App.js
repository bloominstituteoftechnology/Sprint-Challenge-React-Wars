import React, { Component } from 'react';
import './App.css';

// import components
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      inputText : '',
      nextUrl: '',
      page: 1,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  componentDidUpdate() {
    if (this.state.nextUrl) {
      this.getCharacters(this.state.nextUrl);
    }
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
        this.setState({ 
          starwarsChars: [...this.state.starwarsChars, ...data.results],
          nextUrl: data.next,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  onTextChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  onPrevious(e) {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 })
    }
  }

  onNext(e) {
    if (this.state.page * 9 < this.state.starwarsChars.length) {
      this.setState({page: this.state.page + 1})
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <input type="text" onChange={ e => this.onTextChange(e)} placeholder="Filter character" /><br/>
        <div className="buttons">
          <div
            className="button"
            onClick={ e => this.onPrevious(e) }
            style={ this.state.page === 1 ? {display: 'none'} : {} }
          >
            {'<< Prev'}
          </div>
          <div
            className="button"
            onClick={ e => this.onNext(e) }
            style={ this.state.page*9+1 > this.state.starwarsChars.length ? {display: 'none'} : {}}
          >
            {'Next >>'}
          </div>
        </div>
        <div className="card--container">
          { 
            this.state.starwarsChars.slice((this.state.page-1)*9, (this.state.page-1)*9 + 9)
              .filter(
                char => {
                  return (
                    char.name.toLowerCase().includes(this.state.inputText.toLowerCase()) ||
                    char.gender.toLowerCase().includes(this.state.inputText.toLowerCase()) ||
                    char.birth_year.toLowerCase().includes(this.state.inputText.toLowerCase())
                    ) 
                }
              )
             .map(
                char => <Card key={generateID()} char={char}/>
              )
          }
        </div>
      </div>
    );
  }
}

// helper function 
const generateID = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

export default App;