import React from "react";
import { Card, CardText, CardBody, CardTitle, Col} from "reactstrap";


export default function NameList (props){
    return(
        <Col xs="12" s="6" md="4">
            <Card  key={props.id}>
                <CardBody className= "data">
                    <CardTitle> Name: {props.name} </CardTitle>
                    <CardText>Sex: {props.gender}</CardText>
                    <CardText>Mass: {props.mass}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};
