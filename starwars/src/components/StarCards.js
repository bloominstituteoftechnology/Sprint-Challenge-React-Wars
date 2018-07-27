import React, { Component } from 'react';
import './StarWars.css';
import { Button, Card, Row, Col } from 'react-materialize';

class StarCards extends React.Component {
    render() {
        return (
            <Row >
                        {this.props.characters.map(character => (
                            <Col s={6}>
                            <Card className='blue-grey darken-1' textClassName='white-text' title={character.name} key={character.created}>{character.name}</Card>
                            </Col>
                        ))}

            </Row>
        );
    }
}

export default StarCards;