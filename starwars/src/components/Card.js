import React from 'react';
import './StarWars.css';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const StarCard = (props) => {
    return(
        <div className="cardContainer">
            <div className="row">
                {props.char.map(character => 
                    <div className="col-sm-6" key={character.name}>
                        <Card>
                            <CardBody>
                                <CardTitle>{character.name}</CardTitle>
                                <CardSubtitle>{`Gender: ${character.gender}, Born on: ${character.birth_year}`}</CardSubtitle>
                                <CardText>{`Appeared in ${character.films.length} films. ${character.name} has a height of ${character.height} cm. ${character.name} has ${character.starships.length} starships and ${character.vehicles.length} vehicles. ${character.name} has ${character.skin_color} skin color and ${character.eye_color} eyes.`}</CardText>
                                <Button>More info</Button>
                            </CardBody>
                        </Card>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default StarCard;