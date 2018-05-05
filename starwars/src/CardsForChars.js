import React from 'react';
import './starwarsCharList.css';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const CharinCard=({charinCard}) => {
    return (
        <Card  className="cards">
            <CardBody>
                <CardTitle>
                   <h3> {charinCard.name} </h3>
                </CardTitle>
                <CardBody>
                <b>    Gender:</b> {charinCard.gender}
                </CardBody>
                <CardBody>
                    <b>Birth Year:</b>  {charinCard.birth_year}
                </CardBody>
                <CardBody>
                 <b>   Created:</b>  {charinCard.created}
                </CardBody>
                <CardBody>
                   <b> Homeworld:</b> {charinCard.homeworld}
                </CardBody>
                <CardBody>
                   <b> Starships:</b>  {charinCard.vehicles.map(starship =>{
                        return (
                            <div key={starship.length}>
                                {starship}
                            </div>
                        )
                    })}
                </CardBody>
                <CardBody>
                <b>    Height:</b> {charinCard.height}
                </CardBody>
            </CardBody>
        </Card>
    )
}

export default CharinCard;
