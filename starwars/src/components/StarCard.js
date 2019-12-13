import React from "react";
// import { Card, CardBody, CardTitle } from "reactstrap";
import styles from 'styled-components';

const CardStyle = styles.div`
//display:flex;
// align-items: center;
// flex-wrap:wrap;
// justify-content:center;
// line-height: 1rem;
//background: black;

.card{
    //width:30%;
    background: dodgerblue;
    display:flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content:center;
    margin: 2%;

h2, h3, h4{
    width: 90%;
    line-height:1rem;
    }
}



`

export default function StarCard(props) {
// const {name} = props
    return (
        <CardStyle>
            <div className="card">
                <h2>{props.card.name} </h2>
                <h3>DOB: {props.card.birth_year}</h3>
                <h4>Height: {props.card.height}, Weight: {props.card.mass} </h4>
                <h4>Eyes: {props.card.eye_color}, Hair: {props.card.hair_color}</h4>
            </div>
        </CardStyle>
    );
}