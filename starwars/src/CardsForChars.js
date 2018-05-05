import React from 'react';
import './starwarsCharList.css';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const CharinCard=({charinCard}) => {
    return (
        <Card  class="cards">
            <CardBody>
                <CardTitle>
                   <h3> {charinCard.name} </h3>
                </CardTitle>
                <CardBody>
                    {charinCard.gender}
                </CardBody>
                <CardBody>
                    Birth Year:  {charinCard.birth_year}
                </CardBody>
                <CardBody>
                    Created:  {charinCard.created}
                </CardBody>
                <CardBody>
                    Homeworld: {charinCard.homeworld}
                </CardBody>
                <CardBody>
                    Starships:  {charinCard.vehicles.map(starship =>{
                        return (
                            <div key={starship.length}>
                                {starship}
                            </div>
                        )
                    })}
                </CardBody>
                <CardBody>
                    Height: {charinCard.height}
                </CardBody>
            </CardBody>
        </Card>
    )
}

export default CharinCard;
