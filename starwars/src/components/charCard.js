import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Collapse,
  Button
} from 'reactstrap';


const CharCard = ({ name, height, mass, hair_color, birth_year, gender }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card className="char-card">
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Born in {birth_year}</CardText>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                <ul>
                  <li>gender: {gender}</li>
                  <li>height: {height}</li>
                  <li>mass: {mass}</li>
                  <li>hair color: {hair_color}</li>
                </ul>
              </CardBody>
            </Card>
          </Collapse>
          <Button onClick={toggle}>More Info</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharCard;