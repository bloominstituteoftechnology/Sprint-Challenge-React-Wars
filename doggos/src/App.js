import React, { Component } from 'react';
import './App.css';
import {Profile} from './components/profile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Who needs a life when you have Doggos?</h1>
        </header>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    );
  }
}

export default App;
