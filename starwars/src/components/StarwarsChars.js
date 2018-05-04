import React from "react";
import './StarwarsChars.css'
import { Card, CardBody,
  CardTitle,} from 'reactstrap';

const StarwarsChars = props => {
  console.log(props.chars);
  console.log(props.chars.birth_year);
  const n = props.chars
  return (
    <div className="starCards">      
      <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="cardContainer">
        <CardBody>
          <CardTitle>{n.name}</CardTitle>
          <div className="row">
            <div className="col-6">Birth Year: {n.birth_year}</div>
            <div className="col-6">Hair Color: {n.hair_color}</div>
            <div className="col-6">Height: {n.height}</div>
            <div className="col-6">Mass: {n.mass}</div>
            <div className="col-6">Eye Color: {n.eye_color}</div>
            <div className="col-6">Gender: {n.gender}</div>
            <div className="col-6">Skin Color: {n.skin_color}</div>
          </div>
          
        </CardBody> 
        
      </Card>      
    </div>
  );
}




export default StarwarsChars