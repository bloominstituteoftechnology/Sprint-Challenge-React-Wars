import React, { Component } from 'react';
import './App.css';
import CharactersForm from'./components/CharactersForm'; 

const Characters = props =>{
  const { name } = props.characterProp; 
  return(
    <div>
      <h4>{name}</h4>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      name: ""
    };
  }
  display = e =>{
  e.preventDefault();
  const starwarsChars = this.state.starwarsChars.slice();
  starwarsChars.push({
    name: {name}, 
  }); 
  this.setState({starwarsChars});

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

  render() {
    return(
      <div>
      <CharactersForm 
      handleDisplayInfo={this.displayInfo}
      />
      </div>
    )
  }
}

export default App;
