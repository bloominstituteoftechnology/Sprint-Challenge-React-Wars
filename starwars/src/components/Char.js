import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Char = (props) => {
    console.log('char props: ', props)
    return (
        <div className='cardContainer'>

            {props.passedPropToChar.map((item, i) => {
                return (
                    // <div className='card'>
                    <Card className='card'>
                        <CardBody>
                            <div key={i}>
                                <CardTitle>{item.name}</CardTitle>
                                <CardSubtitle className='subtl'><h3>Gender: </h3> {item.gender}</CardSubtitle>
                                <CardSubtitle className='subtl'><h3>Mass: </h3> {item.mass}</CardSubtitle>
                                <CardText> Height:   {item.height}</CardText>
                                <CardText> Birth Year:  {item.birth_year}</CardText>
                            </div>
                        </CardBody>
                    </Card>
                    // </div>
                )
            })}


        </div>
    )
}

export default Char;