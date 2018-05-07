import React, { Component } from 'react';
import logo from './logo.svg';
import AwesomeCard from './Card'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      doggos: [],
    }
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        return res.json();
      })
      .then(data => {
        let newObj = data.message;
        for (let key in newObj) {
          fetch(`https://dog.ceo/api/breed/${key}/images/random`)
            .then(data => {
              newObj[key] = data.url
            })

        }
        this.setState({ doggos: newObj });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    console.log(this.state.doggos)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {Object.keys(this.state.doggos).map((keyName, keyIndex) => {
          return <AwesomeCard key={keyIndex} name={keyName} URL={this.state.doggos.keyName} />
        })}

      </div>
    );
  }
}

export default App;