import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap'
import App from '../App'
const Chars = props => {
  return (
    <div>
      {props.starwarsChars.map((char, index) => (
        <Card key={char.created}>
          <CardBody>
            <CardTitle>NAME : {char.name}</CardTitle>
            <CardSubtitle>{char.gender}</CardSubtitle>
            <h6>WANTED WAR CRIMINALS</h6>
          </CardBody>
          <img width="40%" src={props.src} alt="Card image cap" />
          <CardBody>
            <h5>Descriptions</h5>
            <CardText>Created : {char.created}</CardText>
            <CardText>Eye Color : {char.eye_color}</CardText>
            <CardText>Hair Color : {char.hair_color}</CardText>
            <CardText>Skin Color : {char.skin_color}</CardText>
            <CardText>Height : {char.height}</CardText>
            <CardText>Mass : {char.mass}</CardText>
            {/* <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink> */}
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default Chars
