import React from 'react'
import { Card } from 'semantic-ui-react'



const CharacterCard = (props) => {

    return (
        <Card
            fluid
            raised
            header={props.header}
            description={props.description}
            meta={props.meta}></Card>
    )
}



export default CharacterCard

