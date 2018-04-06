import React from 'react'
import { Card, CardText, CardBody,
    CardTitle, Button, Row, Col } from 'reactstrap';
import './characters.css'
export default class Character extends React.Component{
    constructor(props) {
        super(props);
        console.log('Props: ', props)
    }
    render() {
        return(
            <div>
                <Card className='CharCard'>
                    <CardBody>
                        <CardTitle>{this.props.character.name}</CardTitle>
                        <CardText>
                            <Row>
                                <Col>
                                <h3>Sex:</h3>
                                <div>{this.props.character.gender}</div>
                                <h3>BOD:</h3>
                                <div>{this.props.character.birth_year}</div>
                                </Col>
                            </Row>

                            <div>{this.props.character.height}</div>
                            <div>{this.props.character.weight}</div>
                            <div>{this.props.character.skin_color}</div>
                            <div>{this.props.character.eye_color}</div>
                            <div>{this.props.character.hair_color}</div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}