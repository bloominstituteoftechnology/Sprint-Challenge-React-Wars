import React, { Component } from 'react';
import {Card,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText} from 'reactstrap';
import './CharacterCard.css';

class CharacterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterCard: {}
        };
    }

    componentDidMount() {
        this.setState({characterCard: this.props.characterCard})
    }

    render() {
        return (
            <Card className='card'>
                <CardBody>
                <CardTitle>{this.state.characterCard.name}</CardTitle>
                <CardSubtitle>
                    <CardText>gender: {this.state.characterCard.gender}</CardText>
                    <CardText>hair color: {this.state.characterCard.hair_color}</CardText>
                    <CardText>birth year: {this.state.characterCard.birth_year}</CardText>
                    <CardText>eye_color: {this.state.characterCard.eye_color}</CardText>
                    <CardText>height: {this.state.characterCard.height}</CardText>
                    <CardText>mass: {this.state.characterCard.mass}</CardText>
                    <CardText>skin color:{this.state.characterCard.skin_color}</CardText>
                </CardSubtitle>
                </CardBody>
            </Card>
        );
    }
}

export default CharacterCard;