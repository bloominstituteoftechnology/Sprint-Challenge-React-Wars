import React, {useState} from "react"
import { CardText, CardBody,
CardTitle, CardSubtitle, Button, Collapse} from 'reactstrap'
import styled from "styled-components"

const Card = styled.div`
    width: 100%;
    margin: 1%;
    color: green;
    padding: 2rem 0;
    position: relative;
    border-radius: 10px;
    background-color: gray;
    border: solid 3px green;


`;


const StarWarsCard = props => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
      <Card>
        <CardBody>
        <CardTitle>{props.character.name}</CardTitle>
        <CardSubtitle>Birth Year: {props.character.birth_year}</CardSubtitle>
        <CardText>Gender:{props.character.gender}</CardText>
        <CardText>Hair Color: {props.character.hair_color}</CardText>
          <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
      <Collapse isOpen={isOpen}>
          <CardBody>
          <CardText>Eye Color: {props.character.eye_color}</CardText>
          <CardText>Mass: {props.character.mass}</CardText>
          <CardText>Skin Color: {props.character.skin_color}</CardText>
            </CardBody>
      </Collapse>
    </div>
        </CardBody>
      </Card>
    </div>     

        
    )
    
}

export default StarWarsCard