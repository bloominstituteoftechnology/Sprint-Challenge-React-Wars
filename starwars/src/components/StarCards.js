import React, { Component } from 'react';
import './StarWars.css';
import { Button, Card, Row, Col, Modal, Icon } from 'react-materialize';

class StarCards extends React.Component {
    render() {
        return (
            <Row className='display-flex valign-wrapper center-align'>
                {this.props.characters.map(character => (
                    <Col className="custom-col" key={character.created} s={5}>
                        <Card className='custom-card'textClassName='white-text' title={character.name} >
                            <Modal header={character.name} trigger={<Button waves='light'>NERDS ENTER HERE<Icon right>face</Icon></Button>}>
                                <ul>
                                    <li>Birth Year: {character.birth_year}</li>
                                    <li>Eye Color: {character.eye_color}</li>
                                    <li>Gender: {character.gender}</li>
                                    <li>Hair Color: {character.hair_color}</li>
                                    <li>Height: {character.height}</li>
                                    <li>Mass: {character.mass}</li>
                                </ul>
                                {character.name in this.props.images && <img src={this.props.images[character.name]} />}
                            </Modal>
                        </Card>
                    </Col>
                ))}

            </Row>
        );
    }
}

export default StarCards;