import React, { Component } from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import PropTypes from 'prop-types';

class StarCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starChars: {}
        };
    }

    componentDidMount() {
        this.setState({starChars: this.props.starChars})
    }

    render() {
        return (
            <Card className='card'>
                <CardBody>
                <CardTitle>{this.state.starChars.name}</CardTitle>
                <CardSubtitle>
                    <CardText>gender: {this.state.starChars.gender}</CardText>
                    <CardText>hair color: {this.state.starChars.hair_color}</CardText>
                    <CardText>birth year: {this.state.starChars.birth_year}</CardText>
                    <CardText>eye_color: {this.state.starChars.eye_color}</CardText>
                    <CardText>height: {this.state.starChars.height}</CardText>
                    <CardText>mass: {this.state.starChars.mass}</CardText>
                    <CardText>skin color:{this.state.starChars.skin_color}</CardText>
                </CardSubtitle>
                </CardBody>
            </Card>
        );
    }
}

StarCharacters.propTypes = {
    character: PropTypes.shape({
        gender: PropTypes.string,
        hair_color: PropTypes.string,
        birth_year: PropTypes.string,
        eye_color: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        skin_color: PropTypes.string,
        films: PropTypes.arrayOf(PropTypes.string)
    })
};

export default StarCharacters;
