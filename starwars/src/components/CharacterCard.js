import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div key={props.name}>
        <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <ListGroup>
                    <a href={props.homeworld}><ListGroupItem>{props.homeworld}</ListGroupItem></a>
                    {props.starships.map(starship => {
                        // return `<a href="${starship}">${starship}</a>`;
                        return starship;
                    })}
                </ListGroup>
                <a href={props.url}><Button>Go to character</Button></a>
            </CardBody>
        </Card>
    </div>
  );
}

