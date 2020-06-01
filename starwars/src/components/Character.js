// Write your Character component here
import React from 'react'
import {Card, Col, CardText, CardTitle, CardImg } from 'reactstrap'

const Character = (props) => {
return( 
<Col sm="3">
    <Card body>
        <CardImg src={props.image} />        
        <CardTitle>Name:{props.name}</CardTitle>
        <CardText>Species:{props.species}</CardText>
        <CardText>Status:{props.status}</CardText>
        <CardText>Type:{props.type}</CardText>  

    </Card>
</Col>
)}

export default Character