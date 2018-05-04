import React from 'react';
import './Star.css';
import war from './War';
import { Card, CardBody, CardTitle } from 'reactstrap';

const War = ({actors}) => {
    return (
        < Card >
         <CardTitle>{ actor.name }</CardTitle >
           <CardBody><img src={ actor.url } /></CardBody >
          </Card >
    );
};

export default Star;
