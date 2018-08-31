import React, { Component } from 'react';
import StarWars from './components/StarWars';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      previousPage: '',
      prevClass: ['display-none'],
      nextClass: ['display-none']
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
        this.setState({ starwarsChars: data.results, nextPage: data.next, previousPage: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getNewPage = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results, nextPage: data.next, previousPage: data.previous });
      })
      .catch(err => {
        if (!this.state.previousPage) {
          this.setState({ prevClass: [] }, () => {
            setTimeout(() => {
              this.setState((prevState) => {
                prevState.prevClass.push('display-none');

                return { prevClass: prevState.prevClass };
              });
            }, 1000);
          });
        } else if (!this.state.nextPage) {
          this.setState({ nextClass: [] }, () => {
            setTimeout(() => {
              this.setState((prevState) => {
                prevState.nextClass.push('display-none');

                return { nextClass: prevState.nextClass };
              });
            }, 1000);
          });
        } else {
          throw new Error(err);
        }
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick = { () => this.getNewPage(this.state.previousPage) }>PREVIOUS</button>
        <button onClick = { () => this.getNewPage(this.state.nextPage) }>NEXT</button>
        <div className={ this.state.prevClass.join(" ") }>There is no previous page</div>
        <div className={ this.state.nextClass.join(" ") }>There is no next page</div>
        <StarWars 
          starwarsChars = { this.state.starwarsChars } 
        />
      </div>
    );
  }
}

export default App;
