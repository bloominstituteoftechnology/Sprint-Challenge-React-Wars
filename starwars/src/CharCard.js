import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './CharCard.css'


const CharCard = (props) => {
  console.log('CharCard props:', props);
  return (
      <Card className="card">
        <CardBody>
          <CardTitle>
            {props.card.name}
          </CardTitle>
          <div class="card-prop">
            Gender: {props.card.gender}
          </div>
          <div class="card-prop">
            Height: {props.card.height}
          </div>
          <div class="card-prop">
            Mass: {props.card.mass}
          </div>
          <div class="card-prop">
            Hair Color: {props.card.hair_color}
          </div>
        </CardBody>
      </Card>
  );
}

export default CharCard;
