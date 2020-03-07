import React from "react";
import { Card, CardText, CardBody } from "reactstrap";

const CharCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardText>{props.name}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default CharCard;
