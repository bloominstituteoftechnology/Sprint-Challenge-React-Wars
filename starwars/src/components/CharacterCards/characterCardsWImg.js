import React, {useEffect} from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Styled from 'styled-components';
import FadeIn from 'react-fade-in';



export default function CharacterCards(props){

    const CardTitle = Styled.div`
        font-family:'Raleway';
        font-size: 30px;
    `;

    const Card = Styled.div`
        background-color: white;
        width: 50%;
        opacity: .95;
        margin:auto;
    `;
    return(


                <Card>
                    <CardImg top width="50%" src={props.characterImage} alt="Card image cap" />
                    <CardBody>
                        {/*<FadeIn delay = "700">*/}
                            <CardTitle>{props.title}</CardTitle>
                            <CardText>{props.firstEntry}: {props.firstEntryText}</CardText>
                            <CardText>{props.secondEntry}: {props.secondEntryText}</CardText>
                            <CardText>{props.thirdEntry}: {props.thirdEntryText}</CardText>
                        {/*</FadeIn>*/}
                    </CardBody>
                </Card>


    );
}
