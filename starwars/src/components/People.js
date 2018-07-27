import React from 'react';
import './StarWars.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const People = props => {
    return (
        <div className="cardWrapper">
            <Card>
                <CardImg top width="318" height="180" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Placeholder"></CardImg>
                    <CardBody>
                        <CardTitle>{props.name}</CardTitle>
                        <CardSubtitle>Level 4 Paladin</CardSubtitle>
                        <CardText></CardText>
                        <Button>Do something</Button>
                    </CardBody>
            </Card>
        </div>
    )
}

export default People;
