import React, { Component } from 'react';
import './App.css';
import GoodyBoyCard from './components/GoodBoyCard';

class App extends Component {
  constructor(props) {
    super(props);

    let boyCounter = 1;
    if (window.localStorage.getItem('goodBoyCounter') !== null) {
      boyCounter = parseInt(window.localStorage.getItem('goodBoyCounter'), 10)
    }

    this.state = {
      currentGoodBoy: 'https://images.dog.ceo/breeds/shiba/shiba-3i.jpg',
      numBoys: boyCounter,
      loading: true
    };

    console.log(this)
    this.nextGoodBoy = this.nextGoodBoy.bind(this)
  }

  componentDidMount() {
    this.getGoodBoy();
  }

  getGoodBoy = () => {
    const randomGoodBoy = 'https://dog.ceo/api/breeds/image/random'
    fetch(randomGoodBoy)
      .then(res => {
        return res.json()
      }).then(data => {
        this.setState({ currentGoodBoy: data.message, loading: false })
      }).catch(err => {
        throw new Error(err)
      })
  }


  nextGoodBoy() {
    if (!this.state.loading) {
      document.querySelector('.good-boy-card').classList.toggle('fade-out-card')
      this.setState({
        numBoys: this.state.numBoys + 1,
        loading: true
      })
      this.getGoodBoy();
      document.querySelector('.good-boy-card').classList.toggle('fade-out-card')
      document.querySelector('.good-boy-card').classList.toggle('fade-in-card')
    }
  }


  render() {
    window.localStorage.setItem('goodBoyCounter', this.state.numBoys);
    return (
      <div className="App">
        <h2>Good Boy Counter: {this.state.numBoys}</h2>
        <div className="Card-Container">
          {(this.state.loading ? (
            <div className="lds-circle"></div>
          ) : (
            <GoodyBoyCard goodBoy={this.state.currentGoodBoy} numBoys={this.state.numBoys} nextGoodBoy={this.nextGoodBoy}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
