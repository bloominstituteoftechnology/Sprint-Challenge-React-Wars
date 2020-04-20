import React from 'react'
import {Card, CardTitle, CardFooter, CardHeader, CardBody, CardText} from 'reactstrap'
import { Image } from 'semantic-ui-react'

const CharacterCard = ({name, species, status, image}) => {
    return (
        <Card>
           <CardHeader> <Image src={ image }  style={{margin:'0 auto', border:'15px double dodgerblue', borderRadius: '50%'}} avatar /> </CardHeader>
           <CardBody>
                <CardText style={{fontFamily:'Architects Daughter, cursive', fontSize:'18px'}}>{species} {status}</CardText>
           </CardBody>
                <CardFooter>
            <CardTitle style={{fontFamily:'Rock Salt, cursive', fontSize:'25px'}} > {name} </CardTitle>
                </CardFooter>
        </Card>
    )
}

export default CharacterCard
