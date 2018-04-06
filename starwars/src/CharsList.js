import React from 'react';
import './CharsList.css';
import { Card, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

//CharacterList and ListGroup

const CharsList = props => {
    return (
    <div className="Char-Wrap">
        {props.starwarsChars.map(character => (
           <Card className="cardBox"> 
            <CardBody className="cardBack" key={character.mass}>
                <CardTitle>{`${character.name}`}</CardTitle>                
                    <ListGroup> 
                    <ListGroupItem>{`Height: ${character.height}`}</ListGroupItem>
                    <ListGroupItem>{`Mass: ${character.mass}`}</ListGroupItem>
                    <ListGroupItem>{`Hair_Color: ${character.hair_color}`}</ListGroupItem>
                    <ListGroupItem>{`Skin_Color: ${character.skin_color}`}</ListGroupItem>
                    <ListGroupItem>{`Eye_Color: ${character.eye_color}`}</ListGroupItem>
                    <ListGroupItem>{`Birth_Year: ${character.birth_year}`}</ListGroupItem>
                    <ListGroupItem>{`Gender: ${character.gender}`}</ListGroupItem>
                    <ListGroupItem>{`Homeworld: ${character.homeworld}`}</ListGroupItem>
                    <ListGroupItem>{`Species: ${character.species}`}</ListGroupItem>
                    <ListGroupItem>{`Created: ${character.created}`}</ListGroupItem>
                    <ListGroupItem>{`Edited: ${character.edited}`}</ListGroupItem>
                    <ListGroupItem>{`URL: ${character.url}`}</ListGroupItem>
                    </ListGroup>
            </CardBody>
          </Card>  
    ))}
    </div>
    );
};

//PropTypes
//CharsList.propTypes = {
//     charsProp: PropTypes.arrayOf(PropTypes.shape({
//         height: number,
//     }))
// };

export default CharsList