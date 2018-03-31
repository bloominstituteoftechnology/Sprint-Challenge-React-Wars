import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Name from '../Name/Name';
import DataItem from '../DataItem/DataItem';
import './Portrait.css';

const Portrait = (props) => {
  
  const filterKeys = (key) => {
    let acceptedValues = ['height', 'mass', 'hair_color', 'skin-_color', 'eye_color', 'birth_year']
    return acceptedValues.includes(key);
  }
  console.log(props.pictures)
  return (
    <li className="Portrait">
      <Card>
        <CardImg
          className="Portrait__image"
          top width="100%" 
          src={props.pictures[props.character.name]}
          alt="Card image cap" 
        />
        <CardBody>
          <CardTitle>
            <Name name={props.character.name} />
          </CardTitle>
          <CardText>
            <ul className="Portrait__data">
              {Object.keys(props.character).map((key, index) => {
                if (filterKeys(key)) {
                  return <DataItem data={props.character[key]} title={key} />
                }
              })}
            </ul>
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </li>
  );
}

export default Portrait;