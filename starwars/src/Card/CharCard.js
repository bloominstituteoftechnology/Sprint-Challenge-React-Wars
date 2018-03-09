import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;