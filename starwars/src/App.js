import React, { Component } from 'react';
import './App.css';
import reactstrap from 'reactstrap';
import CharCard from './CharCard.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {

    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(this.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {

    return (

      <div className="App">

        <h1 className="Header">React Wars</h1>
        
        {this.state.starwarsChars.map((characters, i) => {
          return <CharCard key={'characters' + i} {...characters} />;
       })}  

      </div>

    );
  }
}

export default App;
