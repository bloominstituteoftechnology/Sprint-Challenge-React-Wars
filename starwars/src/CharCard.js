import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CharCard = (props) => {
  console.log('CharCard props:', props);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            {props.card.name}
          </CardTitle>
          <div>{props.card.gender}</div>
        </CardBody>
      </Card>
    </div>
  );
}

export default CharCard;
