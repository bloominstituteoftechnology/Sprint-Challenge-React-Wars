import React, { Component } from 'react';
import './App.css';
import StarCharsList from './components/starCharsList'
import ActionButton from './components/ActionButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      prev: '',
  
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
        
        this.setState({ starwarsChars: data.results, next: data.next, prev: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  nextPage = (e) =>{
  e.preventDefault();
  this.getCharacters(this.state.next)
  }

  prevPage =(e)=>{
    e.preventDefault();
    if(this.state.prev === 'null'){
      e.target.classList.add('disabled')
    }else{
      e.target.classList.remove('disabled');
    this.getCharacters(this.state.prev)
    }
  }

  render() {
    return (
      <div className="App">
          <h1 className="Header">React Wars</h1>
          <StarCharsList info={this.state.starwarsChars} />
          <div>
          <ActionButton name='Prev Page' click={this.prevPage} className='previous-button' status={this.state.prev} />
          <ActionButton name='Next Page' click={this.nextPage} className='next-button' status={this.state.next} />
          </div>
      </div>
    );
  }
}

export default App;
