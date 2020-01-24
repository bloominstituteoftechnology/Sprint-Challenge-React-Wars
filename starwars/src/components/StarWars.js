import React from "react";
// import {Card, CardText, CardBody, CardTitle, Button, Col} from "reactstrap";

const StarWars = (props) => {

    return(
        <div>
        {props.name}
        {props.height}
        {props.birth_year}
        {props.gender}
        {props.species}
        {props.films.length} 
        </div>
    )
}

export default StarWars;

