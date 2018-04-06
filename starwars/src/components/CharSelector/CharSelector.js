import React from 'react';
import Species from '../Species/Species';
import Starships from '../Starships/Starships';
import Vehicles from '../Vehicles/Vehicles';
import Films from '../Films/Films';
import './CharSelector.css';
import { Container, Row, Col } from 'reactstrap';

const CharSelector = props => {
    return (
        <div className="container">
            {props.swChars.map((char, index) => (
                <div className="container__card" key={char.created + index}>
                    <Container>
                        <Row>
                            <Col className="text-primary"><h2>{char.name}</h2></Col>
                        </Row>
                        <Row className="text-info">
                            <Col><h4>{`Born: ${char.birth_year}`}</h4></Col>
                            <Col><h5>{`Gender: ${char.gender}`}</h5></Col>
                            <Col><h5>{`height: ${char.height}, mass: ${char.mass} `}</h5></Col>
                        </Row>
                        <Row className="text-info">
                            <Col><h5>Skin Color: {char.skin_color}</h5></Col>
                            <Col><h5>Eye Color: {char.eye_color}</h5></Col>
                        </Row>
                        <Row>
                            <Col><Species species={char.species} /></Col>
                            <Col><Starships starships={char.starships} /></Col>
                            <Col><Vehicles vehicles={char.vehicles} /></Col>
                        </Row>
                        <Row>
                            <Col><Films films={char.films} /></Col>
                        </Row>
                        <Row>
                            <Col><a href={char.url}>Website</a></Col>
                            <Col><p>HomePlanet: <img src={char.homeworld} alt='home planet' /></p></Col>
                        </Row>
                    </Container>
                </div>
            ))}
        </div>
    );
};

export default CharSelector;