import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      prev: null,
      next: null,
      page: 'https://swapi.co/api/people',
    };
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch( this.state.page )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          prev: data.previous,
          next: data.next,
        });
        return Promise.all(data.results.map(async (info, i) => {
          data.results[i].homeworld = await fetch( info.homeworld )
            .then(res => res.json())
            .then(home => home.name );
          return data.results[i];
        }));
      })
      .then(data => {
        this.setState({
          starwarsChars: data,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  goToNextPage() {
    this.setState({ page: this.state.next, }, () => { this.componentDidMount() });
  }
  goToPreviousPage() {
    this.setState({ page: this.state.prev, }, () => { this.componentDidMount() });
  }
  render() {
    return (
      <div className="App">
        <nav className='nav-Header'>
          <button onClick={ this.goToPreviousPage } disabled={ !(this.state.prev) }>previous</button>
          <h1 className="Header">React Wars</h1>
          <button onClick={ this.goToNextPage } disabled={ !(this.state.next) }>next</button>
        </nav>
        <content>
          {this.state.starwarsChars.map(char => {
            return <Card key={ char.url.replace(/[^0-9]/g, '') } char={ char }/>
          })}
        </content>
      </div>
    );
  }
}

export default App;
