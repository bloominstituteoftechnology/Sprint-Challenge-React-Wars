import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Friend.css';

const Friend = ({ friend }) => {
  return (
    <div className="People-Wrapper">
        <Card className="Friend-Card">
            <CardBody>
              <CardTitle>{friend.name} {friend.gender}</CardTitle>
              <CardText>{friend.height}</CardText>
              <CardText>{friend.mass}</CardText>
              <CardText>{friend.hair_color}</CardText>
              <CardText>{friend.skin_color}</CardText>
            </CardBody>
        </Card>
    </div>
  );
};

export default Friend;
