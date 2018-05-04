import React from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';

const Chars = ({ CharacterData }) => {
    return (
        <Row>
            <Col sm="6">
                <Card>
                    <Card body>
                        <CardText>{CharacterData.name}</CardText>
                        <CardText>{CharacterData.height}</CardText>
                    </Card>
                </Card>
            </Col>
        </Row>
    )
}

export default Chars;
