import React, { Component, Fragment } from 'react';

import './App.css';
import './components/ObjectHandler/ObjectHandler.css'
import ObjectHandler from './components/ObjectHandler/ObjectHandler.js'
class App extends Component {
    constructor() {
      super();
      this.state = {
        doggos: []
      };
    }
    componentDidMount() {
  
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ doggos: data});
        })
        .catch(err => {
          throw new Error(err);
        });
    }


  render() {
    console.log(this.state.doggos.message)
    return (
<ObjectHandler {...this.state}/>

    );
  }
}

export default App;
