import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Segment, Card, Placeholder } from 'semantic-ui-react'

const CharacterCard = (props) => {
  console.log(props.planets)
  return (
    <Card>
      <Card.Content>
        <Placeholder style={{ height: 150, width: 320 }}>
          <Placeholder.Image />
        </Placeholder>
        <Card.Header>{props.characterInfo.name}</Card.Header>
        {/* <Card.Meta>{props.planets.map(planet => <h3>{planet.name}</h3>)}</Card.Meta> */}
        <Card.Meta>{props.characterInfo.gender}</Card.Meta>
        <Card.Description>Height: {props.characterInfo.height} cm</Card.Description>
        <Card.Description>Hair Color: {props.characterInfo.hair_color}</Card.Description>
        <Card.Description>Eye Color: {props.characterInfo.eye_color}</Card.Description>
      </Card.Content>
    </Card>
  )
}
export default CharacterCard