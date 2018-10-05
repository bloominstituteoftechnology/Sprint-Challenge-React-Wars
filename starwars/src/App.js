import React, { Component } from 'react';
import './App.css';
import GoodyBoyCard from './components/GoodBoyCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGoodBoy: 'https://images.dog.ceo/breeds/shiba/shiba-3i.jpg',
      numBoys: 1,
      loading: false
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
        this.setState({ currentGoodBoy: data.message, loading: false})
      }).catch(err => {
        throw new Error(err)
      })
  }


  nextGoodBoy() {
    if (!this.state.loading) {
      this.setState({
        numBoys: this.state.numBoys + 1,
        loading: true
      })
      this.getGoodBoy();
    }
  }


  render() {
    return (
      <div className="App">
        <h1 className="Header">Goodboy.com</h1>
        <div className="pagination">
          <button next="next" onClick={this.nextGoodBoy}>{'Good Boy!'}</button>
          </div>
          <div className="Card-Container">
          {(this.state.loading ? (
            <div className="lds-circle"></div>
            ):(
              <GoodyBoyCard goodBoy={this.state.currentGoodBoy} numBoys={this.state.numBoys}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
