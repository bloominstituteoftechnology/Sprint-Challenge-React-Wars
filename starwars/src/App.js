import React, { Component } from 'react';
import './App.css';
import Characters from './Characters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      clickedRobotButton: false,
      clickedHumanishButton: false,
    };

  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
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

  isRobot = (name) => {
    if (name.includes(2)|name.includes(3)|name.includes(4)) {
      return true;
    } else {
      return false;
    }  
  };

  clickedRobotButton =()=> {
    if (this.state.clickedRobotButton === true) {
      return true;
    } else {
      return false;
    }
  }

  clickedHumanishButton = () => {
    if (this.state.clickedHumanishButton === true) {
      return true;
    } else {
      return false;
    }
  }

  clickR =()=>{
    this.setState({clickedHumanishButton: false})
    this.setState({clickedRobotButton: true})
    
  }

  clickH =()=>{
    this.setState({clickedRobotButton: false})
    this.setState({clickedHumanishButton: true})
    
  }

  clickA =()=>{
    this.setState({clickedRobotButton: false})
    this.setState({clickedHumanishButton: false})
    
  }





  render() {
    return (
      <div className="App">
        <h1 className="Header">I don't like Star Wars</h1>
        <button onClick={this.clickA}>All</button>
        <button onClick={this.clickR}>Robots</button>
        <button onClick={this.clickH}>Humanishes</button>
        <h2><Characters isRobot={this.isRobot} clickedHumanishButton={this.clickedHumanishButton} clickedRobotButton={this.clickedRobotButton} charArray={this.state.starwarsChars}/></h2>
      </div>
    );
  }
}

export default App;
