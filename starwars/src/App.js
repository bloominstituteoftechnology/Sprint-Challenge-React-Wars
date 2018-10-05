import React, { Component } from 'react';
import './App.css';
import Character from './components/Character.js';
import Pagination from './components/Pagination/Pagination';
import Modal from './components/Modal/Modal.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
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
        console.log(data.results[0])
        this.setState({
          focusShip: undefined,
          starwarsChars: data.results,
          pageNext: data.next,
          pagePrevious: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  pageNext = () => {
    this.getCharacters(this.state.pageNext);
  }
  pagePrevious = () => {
    this.getCharacters(this.state.pagePrevious);
  }
  focusShip = clickEvent => {
    let characterName = clickEvent.target.dataset.character;
    let character = this.state.starwarsChars.find(testChar => testChar.name === characterName);
    let starShipUrl = character.starships[0];
    fetch(starShipUrl)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        focusData: data
      });
    })
    .catch(err => {
      throw new Error(err);
    });
  }
  closeModal = () => {
    this.setState({
      focusData: undefined
    })
  }

  render() {
    let nextFunction     = this.state.pageNext    ? this.pageNext     : null;
    let previousFunction = this.state.pagePrevious? this.pagePrevious : null;
    let shipData = this.state.focusData;
    let shipModal = (!shipData)? '' : (
      <Modal close={this.closeModal}>
        <div className="card-ship">
          <h2>{shipData.name}</h2>
          <div className="card-stats">
            <span>Model: {shipData.model}</span>
            <span>Manufacturer: {shipData.manufacturer}</span>
            <span>Class: {shipData.starship_class}</span>
            <span>Crew: {shipData.crew}</span>
            <span>Passengers: {shipData.passengers}</span>
            <span>Length: {shipData.length}</span>
            <span>Hyperdrive Rating: {shipData.hyperdrive_rating}</span>
            <span>Max Atmos. Speed: {shipData.max_atmosphering_speed}</span>
            <span>Price: {shipData.cost_in_credits}</span>
            <span>Cargo Capacity: {shipData.cargo_capacity}</span>
          </div>
        </div>
      </Modal>
    )
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {shipModal}
        <Pagination
          navImageLeft="img/nav_left.png"
          navImageRight="img/nav_right.png"
          pagePrevious={previousFunction}
          pageNext={nextFunction}
        >
          <div className="card-container">{
            this.state.starwarsChars.map(character => (
              <Character
                key={character.name}
                character={character}
                focusShip={this.focusShip}
              />
            ))
          }</div>
        </Pagination>
      </div>
    );
  }
}

export default App;
