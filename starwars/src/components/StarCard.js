import React, { Component } from 'react';
import {Card, CardTitle, CardText, Col, Row, 
} from 'reactstrap';

const StarCard = props => {

     console.log(props.character)
     console.log(props.howTall)
     console.log(props.weight)

    return(
         <div key = {props.character}>
           <Row>
           <Col>
           <Card body>
           <CardTitle>{props.character}</CardTitle>
           <CardTitle>{props.howTall}</CardTitle> 
           <CardTitle>{props.weight}</CardTitle> 
           <CardTitle>{props.gender}</CardTitle> 
           <CardTitle>{props.id}</CardTitle> 
           <CardTitle>{props.hair_color}</CardTitle>      
            </Card>
            </Col>
            </Row>

           </div>
    )
}
export default StarCard;  