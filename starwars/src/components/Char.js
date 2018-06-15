import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Char = (props) => {
    console.log('char props: ', props)
    return (
        <div className='cardContainer' id="sortable">

            {props.passedPropToChar.map((item, i) => {
                return (
                    // <div className='card'>
                    <Card className='card' key={i}>
                        <CardBody>

                            <CardTitle>{item.name}</CardTitle>
                            <CardSubtitle className='subtl'>Gender:  {item.gender}</CardSubtitle><br />
                            <CardSubtitle className='subtl'>Mass: {item.mass}</CardSubtitle>
                            <CardText> Height:   {item.height}</CardText>
                            <CardText> Birth Year:  {item.birth_year}</CardText>

                        </CardBody>
                    </Card>
                    // </div>
                )
            })}


        </div>
    )
}

export default Char;