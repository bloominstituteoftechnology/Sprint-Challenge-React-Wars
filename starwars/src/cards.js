import React from 'react';
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

// tried creating a reactstrap card but my CDN is not working for some reason
const Cards = (props) => {
    return (
        <div>
            {props.chars.map(char => { // mapping over characters in array
                return (
                    <div>
                        <Card className="character">
                            <div className='title'>
                            {/* getting name of character for card name */}
                            <p className="name">{char.name}</p> 
                            {/* getting birth year of character  */}
                            <p className="born">{char.birth_year}</p>
                            </div>
                            {/* getting the rest of the character infomation for the card as they map over each person */}
                            <div>
                                <p className="info"> 
                                {char.skin_color},
                                {char.gender}, 
                                {char.eye_color}, 
                                {char.hair_color}, 
                                {char.height},
                                {char.mass}
                                </p>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards;