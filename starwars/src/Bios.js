import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

const Bio = ({actor}) => {
    return(
        <Card>
            <CardTitle>{actor.name}</CardTitle>
            <CardBody><img src={actor.url} /></CardBody>
        </Card>
    )
}

export default Bio;