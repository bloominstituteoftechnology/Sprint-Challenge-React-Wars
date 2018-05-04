import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup,
    ListGroupItem,
    Badge } from 'reactstrap';

const Details = ({details}) => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem><Badge color="secondary">BORN</Badge> : {details.birth_year}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">GENDER</Badge> : {details.gender}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">EYE COLOR</Badge> : {details.eye_color}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">HAIR COLOR</Badge> : {details.hair_color}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">HEIGHT</Badge> : {details.height}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">WEIGHT</Badge> : {details.mass}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">HOME</Badge> : {details.homeworld}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">SKIN COLOR</Badge> : {details.skin_color}</ListGroupItem>
                <ListGroupItem><Badge color="secondary">SPECIES</Badge> : {details.species}</ListGroupItem>
                
            </ListGroup>
        </div>
    );
};

Details.propTypes = {
    birth_year: PropTypes.number,  // "19BBY"
    created: PropTypes.string,  // "2014-12-09T13:50:51.644000Z"
    edited: PropTypes.string,  // "2014-12-20T21:17:56.891000Z"
    eye_color: PropTypes.string,  // "blue"
    films: PropTypes.arrayOf(PropTypes.string),  // (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
    gender: PropTypes.string,  // "male"
    hair_color: PropTypes.string,  // "blond"
    height: PropTypes.number,  // "172"
    homeworld: PropTypes.string,  // "https://swapi.co/api/planets/1/"
    mass: PropTypes.number,  // "77"
    name: PropTypes.string,  // "Luke Skywalker"
    skin_color: PropTypes.string,  // "fair"
    species: PropTypes.arrayOf(PropTypes.string),  //  ["https://swapi.co/api/species/1/"]
    starships: PropTypes.arrayOf(PropTypes.string),  // (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
    url: PropTypes.string,  // "https://swapi.co/api/people/1/"
    vehicles: PropTypes.arrayOf(PropTypes.string)  // (2
};

export default Details;