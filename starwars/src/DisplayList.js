import React from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';
//import './App.css';


//this.props.props.
const DisplayList = (props) => {
    console.log("testing props", props.CardData["homeworld"])
    return <div className="card-container">
        <Card className="Card">
            <CardBody className="card_body">
                <CardTitle>
                    {props.CardData.name}
                </CardTitle>
                <CardText>
                    <div className="Text">
                        {/* <img src={props.CardData.homeworld}/> */}
                    </div>
                    <div>
                        {props.CardData.gender}
                    </div>
                    <div>
                        {props.CardData.hair_color}
                    </div>
                    <div>
                        {props.CardData.height}
                    </div>  
                </CardText>

            </CardBody>
        </Card>

    </div>
} 

export default DisplayList;