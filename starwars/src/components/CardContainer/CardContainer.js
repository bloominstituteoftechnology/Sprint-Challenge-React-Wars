import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText } from 'reactstrap';
import './CardContainer.css';
import Films from '../Films/Films.js';

const CardContainer = props => {
    return(
        <div className="card-container">
            {props.data.map(i => {
                return (
                    <Card key={i.name}>
                        <CardBody>
                            <CardTitle>{i.name}</CardTitle>
                            <CardSubtitle>{`Born: ${i.birth_year}`}</CardSubtitle>
                            <CardText>{`Films:`}</CardText>
                            <Films data={props.data}/>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    );
}

export default CardContainer;