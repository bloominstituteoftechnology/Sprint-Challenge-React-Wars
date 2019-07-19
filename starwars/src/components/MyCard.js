import React from "react";
import Films from "./Films";
import { Card } from "semantic-ui-react";


const MyCard = props => {
  // console.log("Card receiving", props)
  // calcBMI test PASSED: console.log(calcBMI(16.9, 105.4))

  const calcBMI = (kgMass, cmHeight) => {
    const precise = (kgMass / cmHeight / cmHeight) * 10000;
    return Math.round(precise * 10) / 10;
  };

  return (
    
    <Card>
      <Card.Content>
        <Card.Header>{props.source.name}</Card.Header>
        <Card.Description>
          BMI: {calcBMI(props.source.mass, props.source.height)}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Appears in: </p>
        <Films films={props.source.films} />
      </Card.Content>
    </Card>
  );
};

export default MyCard;
