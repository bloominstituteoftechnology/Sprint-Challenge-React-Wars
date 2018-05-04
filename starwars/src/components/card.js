import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './card.css'
import Movielist from './movielist'

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
                                <p><span className="desc">Gender:</span> {element.gender}</p>
                                <p><span className="desc">Height:</span> {element.height}</p>
                                <p><span className="desc">Eye Color:</span> {element.eye_color}</p>

                                <Movielist films={element.films} />
                            </CardText>
                        </CardBody>
                    </Card>
                );
            })}

        </div>
    );
}

export default CardMain;