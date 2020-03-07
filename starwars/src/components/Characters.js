import React from 'react'
import './CharCard.css'

import { Card } from 'semantic-ui-react'

export default function Characters(props) {

    return (
        <div className= "Card">
        <Card.Group>
       <Card>
         <Card.Content>
           <Card.Header>{props.name}</Card.Header>
           <Card.Meta>{props.birth_year}</Card.Meta>
           <Card.Description>{props.hair_color}</Card.Description>
           <Card.Description>{props.height}</Card.Description>
           <Card.Description>{props.eye_color}</Card.Description>
           <Card.Description>{props.gender}</Card.Description>
   
         </Card.Content>
       </Card>
     </Card.Group>
       </div>
    )
}