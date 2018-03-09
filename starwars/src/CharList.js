import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'react';

const CharList = (props) => {
  return (
    <div className='CharList'>
      {props.starwarsChars.map(character => {
        return (
          <Card className='CharList_character' key={ character.id }>
            <CardBody >
              <CardTitle>{ character.name }</CardTitle>
              <CardText>DOB: { character.birth_year } | Gender: { character.gender }</CardText>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}
export default CharList;