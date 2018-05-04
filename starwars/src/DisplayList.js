import React from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';



const DisplayList = (props) => {
    return <div className="card-container">
        <Card>
            <CardBody>
                <CardTitle>
                    {props.name}
                </CardTitle>
                <CardText>
                    <div className="Text">
                        <img src={props.homeworld} alt="tatooine"/>
                        {props.gender}
                        {props.hair_color}
                        {props.gender}
                    </div>
                    
                </CardText>

            </CardBody>
        </Card>

    </div>
} 

export default DisplayList;