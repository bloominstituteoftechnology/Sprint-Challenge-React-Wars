// Write your Character component here
import React from 'react';
import {Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

//REACT COMPONANT
function Character(props){
  return (
    <Card>
      {props.characterArray.map((Character) => {
         return(
           <Card key = {Character.created}>
           <CardHeader>{Character.name}</CardHeader>
           <CardTitle>{Character.model}</CardTitle>
           <CardBody>
           <CardText>{Character.manufacturer}</CardText>
           <Button>{Character.length}</Button>
           </CardBody>
          </Card>
            )
       })}
          <Button >Clear</Button>
    </Card>
  );
};

export default Character;
//_______________________________


// import React from 'react'
// import{ Card, Container, Row, Col, CardTitle } from 'reactstrap'

// function Character(props){
//   console.log(props,'These are your props')
//   return(
//     <Container>
//         <Row>      
//     {props.characterArray.map((Character) => {
//       return(
//         <Card key = {Character.created}>
//            <CardTitle>{Character.name}</CardTitle>      
//         </Card>
//       )
//     })}
//     </Row>
//     </Container>
    
//   )
// }
// export default Character;