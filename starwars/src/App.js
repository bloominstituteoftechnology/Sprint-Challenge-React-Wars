import React, { Component } from "react";
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import "./App.css";
import Luke from "./LukeTLJ.jpg";
import c3po from "./c3po.jpg";
import Beru from "./beru.jpg";
import Biggs from "./biggs.jpg";
import Darth from "./darth.jpg";
import Leia from "./Leia.jpg";
import Obiwan from "./Obiwan.jpg";
import Owen from "./Owen.jpg";
import r2d2 from "./r2d2.jpg";
import R5D4 from "./R5D4.jpg";

const images = [Luke, c3po, r2d2, Darth, Leia, Owen, Beru, R5D4, Biggs, Obiwan];

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="Header">React Wars</h1>
        </div>
        <h2 className="Header">Character Cards!!</h2>
        <div>
          {this.state.starwarsChars.map((el, index) => {
           const {name, height, gender, birth_year,} = el
           return (
      <Card className="CharaCard">
        <CardImg className="CardImages" src={images[index]} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>Height: {height}cm</CardSubtitle>
          <CardSubtitle>Sex: {gender}</CardSubtitle>
          <CardSubtitle>D.O.B: {birth_year}</CardSubtitle>
        </CardBody>
           </Card> )
      })}
        </div>
      </div>
    );
  }
}

export default App;
