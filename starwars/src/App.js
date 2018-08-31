import React, { Component } from 'react';
import './App.css';

import CardContainer from './components/CardContainer.js'

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

  handleClick = event => {
    var re =/[A-Z][a-z]*/
    console.log(event.target);
    console.log(event.target.classList)
    console.log(event.target.classList[1])
    var option = event.target.innerText ?
    re.exec(event.target.innerText)[0].toLowerCase()
    : event.target.classList[1].toLowerCase()
    // console.log(option)
    // console.log(event.target.name);
    // console.log(event.target.classList[0]);
    if (event.target.tagName == 'P'
    || event.target.classList[0] === 'back-display') {
      console.log('im normal')
      console.log(event.target.parentNode.children[event.target.parentNode.children.length-1]);
      Array.from(event.target.parentNode.children).forEach(
        item =>
        item.classList.toggle('hide')
      )
      event.target.parentNode.children[event.target.parentNode.children.length-1]
      .classList.toggle(option)
    } else {
        console.log('im different')
        console.log(event.target.children);
        Array.from(event.target.children).forEach(
          item=>
          item.classList.toggle('hide')
        )
        event.target.children[event.target.children.length-1]
        .classList.toggle(option)

    }
    // event.target.classList.toggle('hide')
   }

  handleChange = event => {
    console.log(event.target.name)
   this.setState({
     [event.target.name]: event.target.value
   });
 };

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardContainer characters={this.state.starwarsChars} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
