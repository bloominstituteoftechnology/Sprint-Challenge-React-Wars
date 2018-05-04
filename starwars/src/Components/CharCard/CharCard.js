import React, { Component } from 'react';
import './CharCard.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class CharCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: props.character,
      characterSpec: {},
      characterFilms: [],
      characterPic: ""
    }

  }





  componentDidMount() {


//The following section of code fetches the first google image search result for a character's name.  Unfortunately, this has a limit of 100 queries per day for the free version, so after only a few times reloading the page it started throwing error 403's.  I'm not paying for more, but if you're looking at this on another day feel free to uncomment it and see it work.  It worked as of the last time I was able to test it.
    // fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7HYHOThjjEoQQrPu-0kbpGgIvSAlI384&q=${this.state.character.name}&num=1&cx=008551943941247460673:_5itqloqun8&searchType=image`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     this.setState({ characterPic: data.items[0].link});
    //   })
    //   .catch(err => {
    //     throw new Error(err);
    //   });

// Since the api that gave me actual character images cut me off, I'll just get a cat image instead

    this.setState({characterPic: `http://thecatapi.com/api/images/get?format=src&type=gif`});



    fetch(this.state.character.species[0])
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ characterSpec: data});
      })
      .catch(err => {
        throw new Error(err);
      });



      this.state.character.films.map((film, index) => {
        fetch(this.state.character.films[index])
          .then(res => {
            return res.json();
          })
          .then(data => {
            let characterFilms = this.state.characterFilms;
            characterFilms.push(data);
            this.setState({ characterFilms: characterFilms});
          })
          .catch(err => {
            throw new Error(err);
          });
      });

  }

  render() {
    return (
      <div className="char-card">
        <Card>
          <CardImg top width="100%" src={this.state.characterPic} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.state.character.name}</CardTitle>
            <CardText>Birth Year: {this.state.character.birth_year} </CardText>
            <CardText>Eye Color: {this.state.character.eye_color} </CardText>
            <CardText>Gender: {this.state.character.gender} </CardText>
            <CardText>Hair Color: {this.state.character.hair_color} </CardText>
            <CardText>Height: {this.state.character.height}cm </CardText>
            <CardText>Mass: {this.state.character.mass}kg </CardText>
            <CardText>Skin Color: {this.state.character.skin_color} </CardText>
            <CardText>Species: {this.state.characterSpec.name} </CardText>
            <CardText>Films: {this.state.characterFilms.map((film, index) => <li key={index}>{film.title}</li>)}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CharCard;
