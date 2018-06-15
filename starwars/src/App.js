import React, { Component } from 'react';

import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
//import styling
import './App.css';
import Container from './elements/Container'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`);
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevState.page !== this.state.page){
      this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`);
    }
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
        console.log(data)
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  addRenderProp = (name) =>{
    let list = this.state.starwarsChars.slice();

    list = list.map(char=>{
      if (char.name === name){
        char.render = !char.render;
      }
      return char;
    })
    this.setState({starwarsChars: list})
  }

  nextPage =()=>{
    let page = this.state.page;
    page += 1;
    this.setState({page})
  }
  prevPage = () => {
    let page = this.state.page;
    page -= 1;
    this.setState({page});
  }

  render() {
    return (
      <div>
        <h1 className="Header">React Wars</h1>
        <Container app>
          <Pagination page={this.state.page} nextHandler={this.nextPage} prevHandler={this.prevPage}/>
          <CharacterList handler={this.addRenderProp} list={this.state.starwarsChars}/>
        </Container>
      </div>
    );
  }
}

export default App;
