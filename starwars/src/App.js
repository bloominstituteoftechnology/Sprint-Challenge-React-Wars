import React, { Component } from 'react';
import StarLists from "./components/StarLists";
import './App.css';
import StarInfo from './components/StarInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber:1,
      starwarsChars: [],
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

  nextPage = () => {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber + 1}`);
    this.setState({ pageNumber: this.state.pageNumber + 1})
    document.querySelector('.prev').classList.remove('disabled');
  }
  
  prevPage = () => {
    if (this.state.pageNumber > 1) {
      this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber - 1}`);
      this.setState({pageNumber: this.state.pageNumber - 1});
    }
    else {
      this.getCharacters(`https://swapi.co/api/people`);
      document.querySelector('.prev').classList.add("disabled");
    }
  }

  disabled = () =>{
    const previousButton = document.querySelector('.prev');
    if(this.state.pageNumber === 1){
      previousButton.classList.add('disabled')
    }
    else{
      previousButton.classList.remove('disabled');
    }
  }

  render() {
    console.log(this.card)
    return (
      <div className="container">
        <h1 className="Header">React Wars</h1>
          <StarLists  show={this.handleClick} stars={this.state.starwarsChars}/>
          <div className="action">
           <div className="btn prev disabled" onClick={this.prevPage}>{this.state.pageNumber -1} Prev </div>
           <div className ="btn next" onClick={this.nextPage}> Next {this.state.pageNumber} </div>
          </div>
      </div>
    );
  }
}

export default App;
