import React, { Component } from 'react';
import './DogApp.css';
import Dog from './Dog';
import reactstrap from 'reactstrap';

class DogApp extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        return res.json();
      })
      .then(data => {
        {console.log(data.message)};
        const dataArray = Object.entries(data.message);
        this.setState({dogs: dataArray});
        {console.log('hereboy!', this.state.dogs)};
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">Doggo Wars</h1>
        {this.state.dogs.map((data, i) => {
          return <Dog data={this.state.dogs[i]} key={i} />
        })}
      </div>
    );
  }
}

export default DogApp;
