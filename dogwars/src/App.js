import React from 'react';
import './App.css';
import CharList from './components/CharList';
import CharCard from './components/CharCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      dogs: [],
      dogIndex: 12,
      currentChar: null,
      nextPage: null,
      prevPage: null
    };
  }

  componentDidMount() {
    //this.getCharacters('https://swapi.co/api/people/');
    this.getDogs('https://dog.ceo/api/breed/hound/images');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data); 
        this.setState({ starwarsChars: data.results, nextPage: data.next, prevPage: data.previous});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.message); 
        this.setState({ dogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
 // show the next page of data
  showNextPage = event => {
    if(this.state.nextPage !== null) {
      const newData = this.getCharacters(this.state.nextPage);
      console.log(newData);
    }
  }

  // show the previous page of data
  showPrevPage = event => {
    if(this.state.prevPage !== null) {
      const newData = this.getCharacters(this.state.prevPage);
      console.log(newData);
    }
  }

  showCurrentChar = name => {
    const currentChar = this.state.starwarsChars.find(char => char.name === name);
    console.log(currentChar);
    this.setState({ currentChar: currentChar });
  }

  returnToList = event => {
    this.setState({ currentChar: null })
  }

  render() {
    if (this.state.currentChar === null) {
      return (
        <div className="container">
          <h1 className="Header">Dog Wars</h1>
          <div className="charList">
          <div className="dogWrapper">
            <div className="dogNext" onClick={event => {
              if (this.state.dogIndex <= 0) {
                return;
              }
              this.setState({dogIndex: this.state.dogIndex - 1});
            }}>Prev Dog</div>
            <div className="dogNext" onClick={event => {
              if (this.state.dogIndex >= this.state.dogs.length ) {
                return;
              }
              this.setState({dogIndex: this.state.dogIndex + 1});
            }}>Next Dog</div>
            </div>
            <img className="dogPic" src={this.state.dogs[this.state.dogIndex]} />
          </div>
        </div>
      );
    } else {
        return ( 
          <div className="container">
            <CharCard returnToList={this.returnToList} character={this.state.currentChar}/>
          </div>
        );
    }
  }
}

export default App;