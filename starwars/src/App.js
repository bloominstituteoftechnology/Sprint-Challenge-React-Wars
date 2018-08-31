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
      prevClass: ['display-none', 'no-page-div-style'],
      nextClass: ['display-none', 'no-page-div-style']
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

  handleClick = (e, pageURL) => {
    return this.getNewPage(pageURL);
  }

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
          // if the error is that there is no previous page
          // add appear class to animate error msg appering
          // then after a set amount of time, give it the disappear class to
          // animate it disappearing, and then finally give it the
          // display-none class to hide it completely
          return this.setState({ prevClass: ['no-page-div-style', 'appear'] }, () => {
            setTimeout(() => {
              this.setState((prevState) => {
                prevState.prevClass.push('disappear');

                return { prevClass: prevState.prevClass };
              }, () => {
                setTimeout(() => {
                  this.setState((prevState) => {
                    prevState.prevClass.push('display-none');
    
                    return { prevClass: prevState.prevClass };
                  });
                }, 250);
              });
            }, 2000);
          });
        } else if (!this.state.nextPage) {
          // if the error is that there is no next page
          // add appear class to animate error msg appering
          // then after a set amount of time, give it the disappear class to
          // animate it disappearing, and then finally give it the
          // display-none class to hide it completely
          return this.setState({ nextClass: ['no-page-div-style', 'appear'] }, () => {
            setTimeout(() => {
              this.setState((prevState) => {
                prevState.nextClass.push('disappear');

                return { nextClass: prevState.nextClass };
              }, () => {
                setTimeout(() => {
                  this.setState((prevState) => {
                    prevState.nextClass.push('display-none');
    
                    return { nextClass: prevState.nextClass };
                  });
                }, 250);
              });
            }, 2000);
          });
        }
        
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick = { (e) => this.handleClick(e, this.state.previousPage) }>PREVIOUS</button>
        <button onClick = { (e) => this.handleClick(e, this.state.nextPage) }>NEXT</button>
        <div className={ this.state.prevClass.join(" ") }>There is no previous page.</div>
        <div className={ this.state.nextClass.join(" ") }>There is no next page.</div>
        <StarWars 
          starwarsChars = { this.state.starwarsChars } 
        />
      </div>
    );
  }
}

export default App;
