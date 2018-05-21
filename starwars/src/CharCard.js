import React from 'react';
import { Card, CardTitle, CardText, CardBody } from "reactstrap";



const CharCard = props => {
    return(
        props.data.map( (item, index) => {
            return(
                <Card className='carditem' key={index}>
                    <CardTitle>{item.name}</CardTitle>
                    <CardBody>
                        <CardText>Gender: {item.gender}</CardText>
                        <CardText>Weight: {Math.round(item.mass*1.6)} pounds</CardText>
                        <CardText>Height: {Math.floor(item.height/30)}' {Math.round(item.height/30%1*12)}"</CardText>
                    </CardBody>
                </Card>
            )
        })
    )
}

export default CharCard;