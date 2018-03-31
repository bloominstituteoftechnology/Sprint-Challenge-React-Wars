import React from 'react';
import './peopleList.css';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const PeopleList = props => {
    console.log("Propsi", props.person);
     return (
        <Card>
            <CardBody>
            <CardImg top width="100%" src="https://i.redd.it/fpm5u9htuwhz.jpg" alt="Card image cap" />
                <CardTitle className="title">
                    {props.person.name}
                </CardTitle>
                <CardText className="sub">
                    Height: {props.person.height}
                </CardText>
                <CardText className="text">
                    Mass: {props.person.mass}
                </CardText>
                <CardText className="text">
                    Hair color: {props.person.hair_color}
                </CardText>
                <CardText className="text">
                    Sex: {props.person.gender}
                </CardText>
            </CardBody>
        </Card>
    );
}

PeopleList.propTypes = {
    starwarsChars: PropTypes.shape({
        name: PropTypes.string.isRequired,
        height: PropTypes.number
    })
}

export default PeopleList;