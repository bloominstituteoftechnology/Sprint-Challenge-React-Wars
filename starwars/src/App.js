import React, { Component } from 'react';
import './App.css';
import AllCards from './components/allCards.js';
// import Card from './components/card.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentlyShowing: [],
      // next: null,
      // previous: null
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
        this.setState({ starwarsChars: data,
        currentlyShowing: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  showIndividual = event => {
    const listCopy = this.state.currentlyShowing.slice();
    let firstItem = [];
    firstItem.push(listCopy[0]);
    this.setState({currentlyShowing: firstItem})
  }

  showAll = event => {
    const listCopy = this.state.starwarsChars.results.slice();
    console.log(listCopy)
    this.setState({currentlyShowing: listCopy})
  }

  next = event => {
    const listCopy = this.state.currentlyShowing.slice();
    console.log(listCopy)
    this.setState({ currentlyShowing: listCopy})
  }

  previous = () => {
    // console.log("previous envoked ")
    const listCopy = this.state.currentlyShowing.slice();

    listCopy.forEach( (each, i) => {
      // let counter = 0
      console.log(`each:`);
      console.log(each);
      // let foo = listCopy[0];
      each.id = i;
      // counter = counter + 1;
    })

    // for (let i = 0; i < listCopy.length; i++) {
    //   this.listCopy[i].id = i
    // }


    // this.setState({currentlyShowing: listCopy});
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <AllCards name="Dummy Card"
        show1={this.showIndividual}
        showAll={this.showAll}
        next={this.next}
        previous={this.previous}
        data={this.state.currentlyShowing}/>
      </div>
    );
  }
}

export default App;
