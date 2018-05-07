import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AwesomeCard = (props) => {
    console.log("props", props)
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.URL} alt="AWESOME DOGGO" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick AwesomeCard text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default AwesomeCard;