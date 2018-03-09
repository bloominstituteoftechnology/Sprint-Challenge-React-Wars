import React, { Component } from 'react';
import './App.css';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardSubtitle } from 'reactstrap';
import favicon from './favicon.ico';
import charCard from './CharCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      chars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    const myChars = fetch('https://swapi.co/api/people');
    myChars
      .then(json => {
      return json.json();
     })
     .catch(err => {
       console.error(err);
     });
    this.setState({
      chars: this.props.myChars,
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          <Card body inverse color="primary">
            <CardImg top width="10%" src={favicon} alt="Card image cap" />
              <CardImgOverlay color='secondary'>
                <CardTitle>{charCard}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardImgOverlay>
          </Card>
      </div>
    );
  }
}

export default App;