import React from 'react';
import "./CharacterInfoStyle.css";
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


export const CharacterInfo = (props) => {
    return (
        <div>
            {props.chars.map(char => {
                return (
                    <div>
                        <Card className="character">
                            <div className='title'>
                                <p className="name">{char.name}</p>
                                <p className="born"> - Born {char.birth_year}</p>
                            </div>

                            <div>
                                <p className="info">{char.skin_color} skinned {char.gender}, {char.eye_color} eyes, {char.hair_color} hair, {char.height}cm tall, {char.mass}kg heavy</p>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

// birth_year: "19BBY" V
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue" V
// gender: "male" V
// hair_color: "blond" V
// height: "172"
// mass: "77"
// name: "Luke Skywalker" V
// skin_color: "fair" V