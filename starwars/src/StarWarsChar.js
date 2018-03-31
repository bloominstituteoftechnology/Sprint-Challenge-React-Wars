import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class StarWarsChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {
            birth_year: '',
            created: '',
            edited: '',
            eye_color: '',
            films: '',
            gender: '',
            hair_color: '',
            height: '',
            homeworld: '',
            mass: '',
            name: '',
            skin_color: '',
            species: '',
            starships: '',
            url: '',
            vehicles: ''
        }
    };
  }

componentDidMount() {
    this.setState({data: this.props.data});
}

  render() {
    return (
        <div>
        <Card>
          <CardImg top width="50%" src="data:image/png;base64,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" alt="Card image cap" />
          <CardBody className='CardBody'>
            <CardTitle>{this.state.data.name}</CardTitle>
            <CardSubtitle>Species: {this.state.data.species} Homeworld: {this.state.data.homeworld}</CardSubtitle>
            <CardText></CardText>
            <CardText className='CardText'>Born: {this.state.data.birth_year}</CardText>
            <CardText className='CardText'>Gender: {this.state.data.gender}</CardText>
            <CardText className='CardText'>Hair Color: {this.state.data.birth_year}</CardText>
            <CardText className='CardText'>Eye Color: {this.state.data.birth_year}</CardText>
            <CardText className='CardText'>Films: {this.state.data.films[0]}, {this.state.data.films[1]} </CardText>
            <CardText className='CardText'>Starships: {this.state.data.starships[0]}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default StarWarsChar;

// StarWarsChar.propTypes = {
//     name: PropTypes.string,
//     created: PropTypes.string,
//     films: PropTypes.array,
//     starships: PropTypes.array,
//     mass: PropTypes.string,
//   };
