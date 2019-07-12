import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Segment, Card } from 'semantic-ui-react'

const CharacterCard = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.characterInfo.name}</Card.Header>
        <Card.Meta>{props.characterInfo.gender}</Card.Meta>
        <Card.Meta>{useEffect( () => {
    axios
    .get('https://swapi.co/api/planets')
    .then(res => {console.log('Planet Data', res.data.results)
      return(
        <div>
          {res.data.results}
        </div>
      )})
  }, [])}</Card.Meta>

      </Card.Content>
    </Card>
  )
}
export default CharacterCard