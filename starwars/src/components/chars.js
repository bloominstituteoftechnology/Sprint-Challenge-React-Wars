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
            <CardTitle>{char.name}</CardTitle>
            <CardSubtitle>{char.gender}</CardSubtitle>
            <h6>WANTED</h6>
          </CardBody>
          <img
            width="40%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <h5>Descriptions</h5>
            <CardText>Created : {char.created}</CardText>
            <CardText>{char.eye_color}</CardText>
            <CardText>{char.hair_color}</CardText>
            <CardText>{char.skin_color}</CardText>
            <CardText>{char.height}</CardText>
            <CardText>{char.mass}</CardText>
            {/* <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink> */}
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default Chars
