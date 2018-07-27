import React, { Component } from 'react';
import './StarWars.css';
import { Button, Card, Row, Col } from 'react-materialize';

class StarCards extends React.Component {
    render() {
        return (
            <div>
                <Col m={6} s={12}>
                    {this.props.characters.map(character => (
                        <Card m={6} s={12} className='blue-grey darken-1' textClassName='white-text' title={character.name} key={character.created}>{character.name}</Card>

                    ))}
                </Col>
            </div>
        );
    }
}

export default StarCards;