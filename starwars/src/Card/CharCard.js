import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import CharList from '../List/CharList';

const CharCard = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default CharCard;