import React from 'react';
//import App from '../App'
// import {cardData} from '../App'
import {  Image, Grid } from 'semantic-ui-react';

// import { StyledH2 } from '../Styles.js';



function PhotoCard(props) {
  console.log(props);
  return (
    // <Card className="photo-card">
    //   <Image src={props.url} />
    //   <h2 color="red">{props.name}</h2>
    //   <Card.Content>
    //     <div>{props.gender}</div>
    //     <Card.Description className="content">
    //       {props.species}
    //     </Card.Description>
    //   </Card.Content>
    // , GridColumn, GridProps
    // </Card>


<Grid celled>
<Grid.Row>
  <Grid.Column width={3}>
    <Image  src={props.url} />
  </Grid.Column>
  <Grid.Column width={10}>
  <h2 color="red">{props.name}</h2>
  <p>{props.species}</p>
  </Grid.Column>
  <Grid.Column width={3}>
    <Image src={props.homeworld} />
  </Grid.Column>
</Grid.Row>
</Grid>
  );
}

export default PhotoCard;

  
// <PhotoCard title={cardData.title} 
// gender={cardData.gender} 
// homeworld = {cardData.homeworld}
// name={cardData.name}

//  url={cardData.url} /> 
