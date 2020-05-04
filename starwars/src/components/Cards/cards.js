import React from 'react';
import Styled from 'styled-components';
import './cardStyle.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import FadeIn from 'react-fade-in';




export default function Cards(props){

    const Card = Styled.div`
        margin: 30px auto;
    `;
    const CardTitle = Styled.div`
        font-family:'Raleway';
        font-size: 30px;
    `;

    const CardText = Styled.div`
        font-family: 'Open Sans Condensed';
        font-size: 20px;
        letter-spacing: 2px;
    `;

    const Button= Styled.button`
        font-family: 'Raleway';
        font-size: 15px;
        letter-spacing: 2px;
        margin: 15px auto;
    `;
    return(
        <div>
            <FadeIn delay = '500' transitionDuration = "1000">
                <Card className="cardDiv">
                    <CardImg top width="50%" src={props.logoPic} alt="Card image cap" />
                    <FadeIn delay="1250">
                        <CardBody>
                            <FadeIn delay="500">
                                <CardTitle>{props.cardTitle}</CardTitle>
                                <CardText>{props.cardContent}</CardText>
                                <Button onClick={props.clickHandler}>{props.buttonContent}</Button>
                            </FadeIn>
                        </CardBody>
                    </FadeIn>
                </Card>
            </FadeIn>
        </div>

    );
}
