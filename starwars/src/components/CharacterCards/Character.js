import React, {useEffect} from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Styled from 'styled-components';



export default function CharacterCards(props){


    const CardTitle = Styled.div`
        font-family:'Raleway';
        font-size: 30px;
    `;

    const Card = Styled.div`
        background-color: white;
        width: 300px;
        opacity: .75;
        margin:auto;
    `;

    return(
        <div>

            <Card>
                {/*<CardImg top width="100%" src={props.characterImage} alt="Card image cap" />*/}
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.firstEntry}: {props.firstEntryText}</CardText>
                    <CardText>{props.secondEntry}: {props.secondEntryText}</CardText>
                    <CardText>{props.thirdEntry}: {props.thirdEntryText}</CardText>

                </CardBody>
            </Card>

        </div>
    );
}
