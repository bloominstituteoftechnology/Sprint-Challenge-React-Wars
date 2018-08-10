import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';


class Character extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm="4">
                        <Card body>
                            <CardTitle>{this.props.character.name}</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    };
}; // class
export default Character;