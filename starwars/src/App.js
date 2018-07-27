import React, { Component } from 'react';
import './App.css';
import StarWarsMain from './components/starWars/StarWarsMain';
import SimpsonsMain from './components/simpsons/SimpsonsMain';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      first: false,
      simpsonsChars: [
        {
          name: 'Homer',
          age: 'age'
        },
        {
          name: 'Marge',
          age: 'age'
        },
        {
          name: 'Bart',
          age: 'age'
        },
        {
          name: 'Lisa',
          age: 'age'
        },
        {
          name: 'Maggie',
          age: 'age'
        },
        {
          name: 'Grampa',
          age: 'age'
        },
        {
          name: 'Mr. Burns',
          age: 'age'
        },
        {
          name: 'Milhouse',
          age: 'age'
        },
        {
          name: 'Moe',
          age: 'age'
        },
        {
          name: 'Ned',
          age: 'age'
        },
      ],
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
  }

  chooseTheme = () => {
    this.setState(prevState => {
      return {first: !prevState.first};
    });
  }

  render() {
    return (
      <div className="web-container">
        <div className={`star-wars ${this.state.first ? null : 'display-none'}`}>
          <StarWarsMain starwarsChars={this.state.starwarsChars} />
        </div>
        <div className={`star-butts ${this.state.first ? 'display-none' : null}`}>
          <SimpsonsMain simpsonsChars={this.state.simpsonsChars} />
        </div>
        <button onClick={this.chooseTheme}>Click Here</button>
      </div>
    );
  }
}

export default App;
