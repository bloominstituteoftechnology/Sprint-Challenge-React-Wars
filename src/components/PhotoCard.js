import React from 'react';

import { Card, Image } from 'semantic-ui-react';

// import { StyledH2 } from '../Styles.js';



function PhotoCard(props) {
  console.log(props);
  return (
    <Card className="photo-card">
      <Image src={props.url} />
      <h2 color="red">{props.title}</h2>
      <Card.Content>
        <div>{props.date}</div>
        <Card.Description className="content">
          {props.explanation}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PhotoCard;

  
// <PhotoCard title={cardData.title} 
// gender={cardData.gender} 
// homeworld = {cardData.homeworld}
// name={cardData.name}

//  url={cardData.url} /> 