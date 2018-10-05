import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      indexShow: 0,
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

  leftPage = () => {
    this.setState(prevState => {
      let { indexShow } = prevState;
      indexShow = (indexShow - 1 < 0) ? prevState.starwarsChars.length - 1 : indexShow - 1;
      return {indexShow};
    })
  }

  rightPage = () => {
    this.setState(prevState => {
      let { indexShow } = prevState;
      indexShow = (indexShow + 1 >= prevState.starwarsChars.length) ? 0 : indexShow + 1;
      return {indexShow};
    })
  }
  

  renderList = () => {
    if (this.state.starwarsChars.length > 0) {
      return (
        <div className="list-container">
          <button onClick={this.leftPage}>{'<'}</button>
          {
            this.state.starwarsChars.map((item, i) => {
              if (this.state.indexShow === i) return <Person info={item} key={i} show={true}/>
              return <Person info={item} key={i}/>
            })
          }
          <button onClick={this.rightPage}>{'>'}</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
