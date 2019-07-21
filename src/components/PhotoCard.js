import React from 'react';
//import App from '../App'
// import {cardData} from '../App'
import "./Photocard.scss"
import {Card} from 'semantic-ui-react';





function PhotoCard(props) {
  //console.log(props);
  console.log('PhotoCard.js -> %cphotocard-props:', 'color: red', props)
  return (
 <section>
    
<Card>
    
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
     
      
     <ul>
     <li> {props.name} is about {props.height} feet tall, give or take a few inches.</li>
     <li> Hair: {props.hair} </li>
     <li> Eyes are {props.eyes}, in the right light. </li>
     <li> 
         Near as we can tell, {props.name} was born or came into being on {props.birthYear}</li>
  
     </ul>
  </Card.Content>
  
  
  </Card>
  {/* <Pagination>
  boundaryRange={1}
  defaultActivePage={props[0]}
  ellipsisItem={10}
  firstItem={props[0]}
  lastItem={props[10]}
  siblingRange={1}
  totalPages={10}
  </Pagination> */}

</section>
   
  )

  }
export default PhotoCard;


        

