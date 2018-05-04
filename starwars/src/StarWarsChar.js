import React from 'react';
import './StarWarsChar.css';
import './starWarsPersons.js'
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
  } from "reactstrap";


  //we are not setting state here because we are setting state in the App. There is no need to
  //set state here. So we will just declare a const here. 
  const StarWarsChar = ({starwarsChar}) => {
      return (
        <div className = "Star-Wars-Card">
            <Card>
                <CardBody>
                <CardTitle>({starwarsChar.name})</CardTitle>
                <CardSubtitle>{starwarsChar.height}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
      );
  };

  export default StarWarsChar;