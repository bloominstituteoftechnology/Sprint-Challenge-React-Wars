import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImgOverlay } from 'reactstrap';

const Character = (props) => {
  return (
    <div className="text-left" style={{width: "420px", margin: "8px auto"}}>
      <Card>
        <CardBody>
          <CardTitle>
            <CardImg className="mb-2" src={`https://starwars-visualguide.com/assets/img/characters/${Number(props.index) + 1}.jpg`} top width="50%" />
            <h4>{props.name}</h4>
          </CardTitle>
          <CardText>
            <small>Birth Year: {props.birth_year}</small><br />
            <small>Eye Color: {props.eye_color}</small><br />
            <small>Gender: {props.gender}</small><br />
            <small>Hair Color: {props.hair_color}</small><br />
            <small>Height: {props.height}</small><br />
            <small>Mass: {props.mass}</small><br />
            <small>Skin Color: {props.skin_color}</small><br />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Character;
