import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardImgOverlay, CardBody,CardHeader } from 'reactstrap';


const Characters = props => {
    return (
        <div>
            <Card key={props.char.name}> 
                <CardHeader><h1>{props.char.name}</h1></CardHeader>
                <CardBody>                                                                  <CardText><div>{props.char.gender}</div></CardText>
                    <CardText><div>{props.char.height}</div></CardText>
                    <CardText><div>{props.char.birth_year}</div></CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default Characters;