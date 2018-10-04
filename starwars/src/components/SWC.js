import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const SWC = props => {
  return (
    <div className="sw-card">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://dogzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2017/08/star-wars-thumb.jpg"
          alt="Star Wars Card"
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Height: {props.height} cm</CardSubtitle>
          <CardText>Weight: {props.mass} kg</CardText>
          <Button>Collect</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SWC;
