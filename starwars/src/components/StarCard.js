import React from "react";
// import { Card, CardBody, CardTitle } from "reactstrap";
import styles from 'styled-components';

const CardStyle = styles.div`
display:flex;
align-items: center;
flex-wrap:wrap;
width: 40%;
justify-content:center;
line-height: 1rem;

h2{
    width: 90%;
}
`

export default function StarCard(props) {
// const {name} = props
    return (
        <CardStyle>
                <h2>{props.card.name} </h2>
                <h3>Height: {props.card.height} </h3>
                <h4>Eye Color: {props.card.eye_color}</h4>
        </CardStyle>
    );
}