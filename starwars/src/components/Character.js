import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Character = (props) => {
    return ( 
        <div className="individual-character">
                <Card>
                    <CardTitle>{props.character.name}</CardTitle>
                        <CardText>
                            <div className="character-information-1">
                                <p>Gender: {props.character.gender}</p>
                                <p>Birth Year: {props.character.birth_year}</p>
                                <p>Height: {props.character.height}</p>
                            </div>
                            <div className="character-information-2">
                                <p>Eye Color:{props.character.eye_color}</p>
                                <p>Hair Color: {props.character.hair_color}</p>
                                <p>Skin Color: {props.character.skin_color}</p>
                            </div>
                        </CardText>
                </Card>
        </div>
     );
}
 
export default Character;