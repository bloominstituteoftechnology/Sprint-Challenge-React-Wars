import React, { Component } from 'react';
import CardList from './components/CardComponents/CardList';
import ButtonComponent from './components/ButtonComponents/ButtonComponent';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageIndex: 1
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  // Go to the previous page of people
  previousPage = event => {

    // Set the state pageIndex up by one and then call the callback function
    this.setState(prevState => ({
      pageIndex: prevState.pageIndex - 1
    }), () => {

      // Check if pageIndex is at the end and reset it.
      if (this.state.pageIndex <= 0) {
        this.setState({pageIndex: 1});
        return;
      }
      
      // Grab the new page of characters
      this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageIndex}`);
    });

    

    
  }

  // Go to the next page of people
  nextPage = event => {

    // Set the state pageIndex up by one and then call the callback function
    this.setState(prevState => ({
      pageIndex: prevState.pageIndex + 1
    }), () => {

      // Check if pageIndex is at the end and reset it back by one.
      if (this.state.pageIndex >= 10) {
        this.setState({pageIndex: 9});
        return;
      }
      
       // Grab the new page of characters
      this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageIndex}`);
    });

    
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ButtonComponent 
          btnValue1="Previous Page"
          btnValue2="Next Page"
          btnHandleClick1={() => this.previousPage()}
          btnHandleClick2={() => this.nextPage()}
        />
        <CardList
          card={this.state.starwarsChars}
        />
        <ButtonComponent 
          btnValue1="Previous Page"
          btnValue2="Next Page"
          btnHandleClick1={() => this.previousPage()}
          btnHandleClick2={() => this.nextPage()}
        />
        
      </div>
    );
  }
}

export default App;
