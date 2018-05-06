import React, { Component } from 'react';
import './App.css';
import Card from './components/card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it in our state.
    fetch('https://swapi.co/api/people/')
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
  render() {
    console.log('this.state inside app.js', this.state.starwarsChars);
    
    
    
    
    //let cards = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>];
    
    return (
    <div className="App">
        <h1 className="Header">React Wars</h1>
          <div className='cardsFlow'>
            {this.state.starwarsChars.map((item, index) =>{
                  return <Card whatever={item} key={index} />
            })}
          </div>
    </div>
    );
  }
}

export default App;
