import React from 'react';
import  {Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText} from 'reactstrap';
import './CardContainer.css';
import Films from '../Films/Films.js';

const CardContainer = props => {
    return(
        <div>
            {props.data.map(i => {
                return (
                    <Card key={i.name}>
                        <CardBody>
                            <CardTitle>{i.name}</CardTitle>
                            <CardSubtitle>{`Born: ${i.birth_year}`}</CardSubtitle>
                        </CardBody>
                        <CardImg width="100%" src={i.homeworld}/>
                        <CardBody>
                            <CardText>{`Films:`}</CardText>
                            <Films data={props.data}/>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    );
}

export default Card;


birth_year:
"19BBY"
created:
"2014-12-09T13:50:51.644000Z"
edited:
"2014-12-20T21:17:56.891000Z"
eye_color:
"blue"
films:
Array[5]
gender:
"male"
hair_color:
"blond"
height:
"172"
homeworld:
"https://swapi.co/api/planets/1/"
mass:
"77"
// name:
// "Luke Skywalker"
skin_color:
"fair"
species:
Array[1]
starships:
Array[2]
url:
"https://swapi.co/api/people/1/"
vehicles:
Array[2]