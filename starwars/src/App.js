import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      starwarsChars: []
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
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber + 1}`);
    this.setState({pageNumber: this.state.pageNumber + 1})
  }

  previousPage = () => {
    if (this.state.pageNumber > 1) {
      this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber - 1}`);
      this.setState({pageNumber: this.state.pageNumber - 1});
    }
    else {
      this.getCharacters(`https://swapi.co/api/people`);
    }
  }
  clickHandler = (event) => {
    event.preventDefault();
    event.target.parentNode.classList.add('selected');
  }

  resetHandler = () => {
    document.querySelectorAll('.character-card').forEach(el => {
     return el.classList.remove('selected');
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <CardList starwars={this.state.starwarsChars}
          clickHandler={this.clickHandler}
          key={this.state.starwarsChars.name}
          />
        </div>
        <div className="buttons">
          <div className="previous" onClick={this.previousPage}>Previous</div>
          <div className="reset" onClick={this.resetHandler}>Reset</div>
          <div className="next" onClick={this.nextPage}>Next</div>
        </div>
        
      </div>
    )
  }
}

export default App;
