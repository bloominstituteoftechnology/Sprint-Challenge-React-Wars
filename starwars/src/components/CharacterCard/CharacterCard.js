import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import MovieList from '../MovieList/MovieList';
import './CharacterCard.css';

class CharacterCard extends Component {
  constructor() {
    super();
    this.state = {
      swWorld: {},
    };
  }
  
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(this.props.char.homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log("DATA: World", data);
        this.setState({ swWorld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  genderRestatement = () => {
    if (this.props.char.gender === "male") return `man`;
    if (this.props.char.gender === "female") return `woman`;
    return `robot`;
  }
  render() {
    return (
      <div>
        <Card className="card">
          {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle>{this.props.char.name}</CardTitle>
            <CardSubtitle className="world">From {this.state.swWorld.name}</CardSubtitle>
            <br />
            <CardText>{this.props.char.name} is a {this.genderRestatement()} from the world of {this.state.swWorld.name}.</CardText>
            {/* <MovieList films={this.props.char.films} /> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CharacterCard;