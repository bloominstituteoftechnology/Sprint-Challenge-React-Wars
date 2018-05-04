import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup,
    ListGroupItem,
    Badge } from 'reactstrap';

const Details = () => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem><Badge color="secondary">BIRTH DAY</Badge> : Birth day</ListGroupItem>
                <ListGroupItem><Badge color="secondary">New</Badge> : Birth day</ListGroupItem>
                <ListGroupItem><Badge color="secondary">New</Badge> : Birth day</ListGroupItem>
                <ListGroupItem><Badge color="secondary">New</Badge> : Birth day</ListGroupItem>
                
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