import React, { Component } from 'react';
import Image from './Components/Image';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/image/random/12');
  }

  getDogs = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          dogs: data.message
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleRefresh = e => {
    e.preventDefault();
    this.getDogs('https://dog.ceo/api/breeds/image/random/12');
  };

  render() {
    return (
      <div className="App">
        <Header handleRefresh={this.handleRefresh} />
        {this.state.dogs.map((dog, i) => {
          return <Image dog={dog} key={i} id={i} />;
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
