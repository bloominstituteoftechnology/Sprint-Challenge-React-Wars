import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';


class Character extends React.Component {
    
    constructor(props) {
        super(props);

        // this.state = {
        //     starwarsChars: ['',]
        // }
    }

    render() {
        return (
                <Row>
                    <Col>
                        <Card body>
                            <CardTitle>{this.props.character.name}</CardTitle>
                            <CardText>
                                <div>Height:</div>
                                <div>{this.props.character.height}</div>
                                <div>Birth Year:</div>
                                <div>{this.props.character.birth_year}</div> 
                            </CardText>
                        </Card>
                    </Col>
                </Row>
        );
    };
}; // class
export default Character;