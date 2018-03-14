import React from 'react';
import './ToonCard.css';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';

const ToonCard = (props) => {
    const {
        name,
        height,
        mass,
        haircolor,
        skincolor,
        eye_color,
        birth_year,
        gender
    } = props.tooninfo;

    return (

        <Card>
            <CardImg
                top
                width="20%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"/>
            <CardBody>
                <CardTitle>
                    <p className="toon-name">{name}</p>
                </CardTitle>
                <CardText className="cardinfo">{skincolor} {haircolor}
                    Height : {height}
                    Weight : {mass}
                    Wair color : {haircolor}
                    Skin color :{skincolor}
                    Eye color :{eye_color}
                    Birth year : {birth_year}
                    Gender : {gender}</CardText>
            </CardBody>
        </Card>

    )
}

export default ToonCard;