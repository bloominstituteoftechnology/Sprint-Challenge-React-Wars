import React from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';


//this.props.props.
const DisplayList = (props) => {
    console.log("testing props", props.CardData["homeworld"])
    return <div className="card-container">
        <Card>
            <CardBody>
                <CardTitle>
                    {props.CardData.name}
                </CardTitle>
                <CardText>
                    <div className="Text">
                        <img src={props.CardData.homeworld}/>
                    </div>
                    <div>
                        {props.CardData.gender}
                    </div>
                    <div>
                        {props.CardData.hair_color}
                    </div>
                    <div>
                        {props.CardData.gender}
                    </div>  
                </CardText>

            </CardBody>
        </Card>

    </div>
} 

export default DisplayList;