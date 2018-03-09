import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
import './CardNames.css';

class CardNames extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Card className="Card-mod">
                <CardImg top width="100%" src={require("../../testImg.jpg")} alt="starwars art" />
                <CardBody>
                    <CardTitle className="CardTitle-mod">{this.props.thing.name}</CardTitle>
                    <CardSubtitle>{this.props.thing.birth_year}</CardSubtitle>
                    <CardText>
                        <p>height: {this.props.thing.height}</p>
                        <p>hair color: {this.props.thing.hair_color}</p>
                        <p>skin color: {this.props.thing.skin_color}</p>
                        <p>eye color: {this.props.thing.eye_color}</p>
                        <p>gender: {this.props.thing.gender}</p>
                        <p>homeworld: <a href={this.props.thing.homeworld}>Click here for homeworld!</a></p>
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

CardNames.propTypes = {
    thing: PropTypes.shape({
        name: PropTypes.string,
        height: PropTypes.string,
        hair_color: PropTypes.string,
        skin_color: PropTypes.string,
        eye_color: PropTypes.string,
        birth_year: PropTypes.string,
        gender: PropTypes.string,
    })
};

export default CardNames;

{/* "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/14/", 
                "https://swapi.co/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.co/api/people/1/"
        }, 
        { */}