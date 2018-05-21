import React, { Component } from 'react';
import './App.css';
import CharCard from "./CharCard";



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous:'',
    };
  }
  componentDidMount() {
    this.fetchData('https://swapi.co/api/people/')
  }

  fetchData (url) {
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        starwarsChars: data.results,
        next: data.next,
        previous: data.previous,
       });
    })
    .catch(err => {
      throw new Error(err);
    });
  }


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.previous ? <button onClick={()=> this.fetchData(this.state.previous)}>Previous</button>: null }
        {this.state.next ? <button onClick={()=>this.fetchData(this.state.next)}>Next</button>: null}
        <CharCard className='flex' data={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
