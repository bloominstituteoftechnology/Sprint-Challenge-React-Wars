import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './card.css'

const CardMain = props => {
    console.log("PROPS", props)
    return (
        <div className="row justify-content-center">
            {props.data.starwarsChars.map((element, index) => {
                return (
                    <Card key={index} className="col-3">
                        <CardBody>
                            <CardTitle>{element.name}</CardTitle>
                            <CardSubtitle>{element.birth_year}</CardSubtitle>
                            <CardText>
                                Details:
                                <p>Gender: {element.gender}</p>
                                <p>Height: {element.height}</p>
                                <p>Eye Color: {element.eye_color}</p>
                            </CardText>
                            <Button onClick={props.toggle}>Films?!</Button>
                        </CardBody>
                    </Card>
                );
            })}

        </div>
    );
}

export default CardMain;