import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
  
const StarWarsCard = props => {
    return(
    <div className='row'>
        {props.starwarsChars.map(data => {
            return <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle>{data.name}</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </Card>
        })}
    </div>);
}

export default StarWarsCard