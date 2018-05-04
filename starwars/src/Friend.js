import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Friend.css';

const Friend = ({ friend }) => {
  return (
    <div className="People-Wrapper">
        <Card className="Friend-Card">
            <CardBody className="Card-Body">
              <CardTitle className="Card-Title">{friend.name}</CardTitle>
              <CardText>{friend.gender}</CardText>
              <CardText>{friend.height}</CardText>
              <CardText>{friend.mass}</CardText>
              <CardText>{friend.hair_color}</CardText>
              <CardText>{friend.skin_color}</CardText>
              <button>More Info</button>
            </CardBody>
        </Card>
    </div>
  );
};

export default Friend;
