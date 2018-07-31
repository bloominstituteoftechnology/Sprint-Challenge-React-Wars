import React, { Component } from 'react';
import './App.css';
import StarCards from './components/StarCards';


const characterImages = {"Luke Skywalker": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2-prod.mirror.co.uk%2Fincoming%2Farticle9603913.ece%2FALTERNATES%2Fs1200%2FPROD-Luke-Skywalker-in-Star-Wars-film.jpg&imgrefurl=https%3A%2F%2Fwww.mirror.co.uk%2Fnews%2Fweird-news%2Fstar-wars-luke-skywalker-inspires-9603897&docid=6cG3AB3uAz1BEM&tbnid=lwhvGDbWBfbKMM%3A&vet=10ahUKEwjYu6K5y8jcAhUSJt8KHYzNCFgQMwjoAigoMCg..i&w=1200&h=630&safe=off&bih=600&biw=1220&q=luke%20skywalker&ved=0ahUKEwjYu6K5y8jcAhUSJt8KHYzNCFgQMwjoAigoMCg&iact=mrc&uact=8"}

class App extends Component {
  constructor() {
    super();
    this.state = {
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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarCards className="StarCards" characters={this.state.starwarsChars} images={characterImages}/>
      </div>
    );
  }
}

export default App;
