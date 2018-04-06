import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Badge, CardImg, CardImgOverlay } from 'reactstrap';


const PeopleList = props => {
  return (
    <div className="People-Wrapper">
      {props.starwarsChars.map(person => (
        <Card inverse>
        <CardImg width = "100%" src = "https://i.amz.mshcdn.com/O8rMOJtTmcjAJSkJtdbJUAC100g=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F675031%2Fbbb3432c-5253-4fa8-bb03-35b4d1b9ce23.jpg" alt = "Star Wars img" />
          <CardImgOverlay>
          <CardBody key={person.id}>
          <h1><Badge color="primary">{`${person.name}`}</Badge></h1>
            {/* <CardTitle>{`${person.name}`}</CardTitle> */}
            <CardSubtitle>{person.birth_year}</CardSubtitle>
            <CardText className = "stats">{person.height}<br/>
            {person.mass}<br/>
            {person.hair_color}<br/>
            {person.eye_color}<br/>
            {person.skin_color}<br/>
            {person.gender}<br/>
            </CardText>
          </CardBody>
          </CardImgOverlay>
        </Card>
      ))}
    </div>
  );
};

export default PeopleList;
