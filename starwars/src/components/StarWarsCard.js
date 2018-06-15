import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
  
const StarWarsCard = props => {
    return(
    <div className='row'>
        {props.starwarsChars.map(data => {
            return <Card className='card-container col-4' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle>{data.name}</CardTitle>     
            <CardText>
                <p>Birth Year: {data.birth_year}</p>
                <p>Created: {data.created}</p>
                <p>Edited: {data.edited}</p>
                <p>Eye Color: {data.eye_color}</p>
                <p>Gender: {data.gender}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Height: {data.height}</p>
                <p>Mass: {data.mass}</p>
                <p>Skin Color: {data.skin_color}</p>
                <p></p>
                </CardText>
            <Button>Button</Button>
          </Card>
        })}
    </div>);
}

export default StarWarsCard