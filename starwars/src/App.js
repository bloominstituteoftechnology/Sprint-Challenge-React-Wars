import React, {Component} from 'react';
import CardContainer from './components/CardContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      previousData: [],
      starwarsChars: [],
      nextData: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL).then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        starwarsChars: data.results,
        nextData: data.next,
        previousData: data.previous});
    }).catch(err => {
      throw new Error(err);
    });
  };

  getNext = event => {
    event.preventDefault();
    if (this.getCharacters(this.state.nextData)) {
      this.setState({
        previousData: this.state.starwarsChars, starwarsChars: this.state.nextData})
    }
  }

  getPrevious = event => {
    event.preventDefault();
    if (this.state.previousData.length > 0){
      this.setState({
        nextData: this.state.starwarsChars,
        starwarsChars: this.state.previousData
      })
    }
  }

  render() {
    return (<div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer getNext={this.getNext} getPrevious={this.getPrevious} characters={this.state.starwarsChars} previousData={this.state.previousData}
      nextData={this.state.nextData}/>
    </div>);
  }
}

export default App;

// plan:
// -data is an array of objects, 10 things.
//pass data array down to a container, to a card.
//card has birthyear, eyecolor, gender, hair color, height, mass, maybe species or homeworld if i can figure out how to get them?
