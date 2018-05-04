import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';


const Character = props => {
    return(
        <Card>
            <CardBody>
                <CardTitle>
                    <CardImg className="mb-3"  />
                    <h3>{props.name}</h3>
                </CardTitle>
                        <div>
                            <p>Height: {props.height}</p>
                            <p>Eye Color: {props.eye_color}</p>
                            <p>Birth Year: {props.birth_year}</p>
                            <p>Hair Color: {props.hair_color}</p>
                            <p>Gender: {props.gender}</p>
                            <p>Skin Color: {props.skin_color}</p>
                            <p>Mass: {props.mass}</p>
                        </div>
            </CardBody>
        </Card>
    )}

export default Character;