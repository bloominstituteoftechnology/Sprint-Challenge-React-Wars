import React from "react"
import {Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button, Collapse} from 'reactstrap'


const StarWarsCard = props => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
        <CardTitle>{props.character.name}</CardTitle>
        <CardSubtitle>Birth Year: {props.character.birth_year}</CardSubtitle>
        <CardText>Gender:{props.character.gender}</CardText>
        <CardText>Hair Color: {props.character.hair_color}</CardText>
          <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <CardText>Eye Color: {props.character.eye_color}</CardText>
          <CardText>Mass: {props.character.mass}</CardText>
          <CardText>Skin Color: {props.character.skin_color}</CardText>

          </CardBody>
        </Card>
      </Collapse>
    </div>
        </CardBody>
      </Card>
    </div>     

        
    )
    
}