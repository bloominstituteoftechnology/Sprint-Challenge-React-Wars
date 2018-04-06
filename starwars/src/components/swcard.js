import React from 'react';
import { Card,CardImg,CardText,CardBody,
         CardTitle,CardSubtitle} from 'reactstrap';
import './style.css';



const SWCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="180px" src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/>
                <CardBody>
                    <CardTitle> {props.card.name} </CardTitle>
                    <CardSubtitle>  Species: {props.card.species} </CardSubtitle>
                    <CardText> {props.card.name} was born in the year {props.card.birth_year} on 
                    planet {props.card.homeworld}. {props.card.name} was featured in {props.card.films.length} full
                    length movies of the star wars franchise.
                     </CardText>
                    </CardBody>
                </Card>
            </div>
    )
}

export default SWCard; 