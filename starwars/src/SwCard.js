import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";

const SwCard = props => {

    return (
        <Col xs="6" sm="4" lg="2" key={props.name}>
        <Card className="card">
          <CardBody>
            <CardTitle>Star Wars Character: {props.name}</CardTitle>
            <CardText>
              <small className="text-muted">
                Height: {props.height}
              </small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
};

export default SwCard;
