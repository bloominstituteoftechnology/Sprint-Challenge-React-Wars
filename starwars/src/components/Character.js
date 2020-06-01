// Write your Character component here
import React from 'react'
import {Card, Col, CardText, CardTitle, CardImg } from 'reactstrap'

const Character = (props) => {
return( 
<Col sm="2">
    <Card outline color='warning' style={{padding:'4%',margin:'5%',backgroundColor:'#673'}}>
        <CardImg src={props.image} />        
        <CardTitle><b>Name:</b> <u>{props.name}</u></CardTitle>
        <CardText><b>Species:</b> {props.species}</CardText>
        <CardText><b>Gender:</b> {props.gender}</CardText>          
        <CardText><b>Status:</b> {props.status}</CardText>
    </Card>
</Col>
)}

export default Character