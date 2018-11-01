import React, { Component } from "react";
import "./style/App.css";
import Card from "./components/card";
import { Port, Api } from "./variables";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    axios
      .get(Api.REACT_APP_CHAR)
      .then(response => {
        this.setState(() => ({ starwarsChars: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    console.log("this.state inside app.js", this.state.starwarsChars);
    console.log(`This React App is running on ${Port.REACT_APP_PORT}`);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="cardsFlow">
          {this.state.starwarsChars.map((item, index) => {
            return <Card somestuff={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
