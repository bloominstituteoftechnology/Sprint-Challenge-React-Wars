import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageNum: 1,
      data: {
        previous: null,
        next: null
      },
      loading: false
    };

    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people?page=' + this.state.pageNum);
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
        console.log(data);
        this.setState({ starwarsChars: data.results, data: data, loading: false });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage() {
    if (this.state.data.next !== null && !this.state.loading) {
      this.setState({
        pageNum: this.state.pageNum + 1,
        loading: true
        
      })
      this.getCharacters(this.state.data.next);
    }
  }
  prevPage() {
    if (this.state.data.previous !== null && !this.state.loading) {
      this.setState({
        pageNum: this.state.pageNum - 1,
        loading: true
      })
      this.getCharacters(this.state.data.previous);
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="pagination">
          <button prev="prev" onClick={this.prevPage}>{'<--Prev'}</button>
          <button next="next" onClick={this.nextPage}>{'Next-->'}</button>
          </div>
          <div className="Card-Container">
          {(this.state.loading ? (
            <div className="lds-circle"></div>
            ):(
              this.state.starwarsChars.map((chracter, i) => {
              return <CharacterCard key={i} data={chracter} />
            })
          ))}
        </div>
      </div>
    );
  }
}

export default App;
