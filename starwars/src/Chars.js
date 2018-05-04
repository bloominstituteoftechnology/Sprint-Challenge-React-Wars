import React from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Col, Container } from 'reactstrap';
import './CharList.css';

const Chars = ({ CharacterData }) => {
    return (
        <container>
            <div className="Character-Card">
                <Row >
                    <Col lg="6">
                        <Card>
                            <Card body outline color="secondary">
                                <CardTitle>{CharacterData.name}</CardTitle>
                                <CardText>Height: {CharacterData.height}</CardText>
                                <CardText>Mass: {CharacterData.mass}</CardText>
                                <CardText>Hair Color: {CharacterData.hair_color}</CardText>
                                <CardText>Skin Color: {CharacterData.skin_color}</CardText>
                            </Card>
                        </Card>
                     </Col>
                </Row>
            </div> 
        </container>
               
    )
}

export default Chars;
