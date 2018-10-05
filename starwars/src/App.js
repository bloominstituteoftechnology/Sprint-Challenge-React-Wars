import React, { Component } from 'react';
import './App.css';
import Card from './components/card'

class App extends Component {
  constructor() {
    super();
    // I added next and previous to state to store my URLs for pagination.
    this.state = {
      url: 'https://swapi.co/api/people',
      starwarsChars: [],
      next: '',
      previous: '',
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.url);
  }

  // Here are my two pagination functions. There is some error handling included to prevent the site from crashing if the user clicks on a button that will not lead anywhere.
   previousPage = () => {
    if (this.state.previous !== null) {
      this.getCharacters(this.state.previous);
    }
    else {
      alert("You're at the first page! Try the 'Next' button.")
    }
  }

  nextPage = () => {
    if (this.state.next !== null) {
      this.getCharacters(this.state.next);
    }
    else {
      alert("You're at the last page! Try the 'Previous' button.")
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
        console.log(data);
        this.setState({ starwarsChars: data.results, next: data.next, previous: data.previous });
        // I updated what gets added to state here, so that I could easily access the next and previous URLs.
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        {/* this creates next and previous buttons on the top of the page */}
        <div className="pageButtons"> 
          <button onClick={this.previousPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
        
        {/* this maps through the data to create character bio cards */}
        <div className="cards">
          {this.state.starwarsChars.map((char, i) => <Card key={i} char={char}/>)}
        </div>
        
        {/* this creates next and previous buttons on the bottom of the page */}
        <div className="pageButtons">
          <button onClick={this.previousPage}>Previous</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
