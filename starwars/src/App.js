import React, { Component } from 'react';
import CharachterList from './components/Charachterlist';
import Button from './components/Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      link:`https://swapi.co/api/people/?page=1`,
      count: 1,
    };
  }

  componentDidMount() {
    this.getCharacters(this.state.link);
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

  // incrementCount = event => {
  //   this.setState(prevState => { 
  //   return { count: prevState.count +1 };
  //   })
  //   console.log(this.state.count);
  // };
  
  // updateLink = event => {
  //   this.setState({
  //     link: `https://swapi.co/api/people/?page=${this.state.count}`})
  //     console.log(this.state.link);
  // };

 

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharachterList 
        starwarsChars={this.state.starwarsChars} 
        char={this.state.starwarsChars} 
        onClick={this.clickIMG}/>
        {/* <Button function={this.incrementCount} text="increment count"/>
        <Button function={this.updateLink} text='update link'/> */}
      </div>
    );
  }
}

export default App;
