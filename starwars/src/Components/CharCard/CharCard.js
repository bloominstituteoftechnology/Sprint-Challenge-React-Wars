import React from "react";
import './CharCard.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, UncontrolledCarousel } from "reactstrap";


export const CharCard = (props) => {
    return(
       <div>
            {props.post.map((charInfo => {
                return(
                    <div class="topCard">
                        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle>
                                <div class="cardTitle">
                                    {charInfo.name}
                                </div>
                            </CardTitle>
                            <CardText>
                                <div>
                                DOB: {charInfo.birth_year}
                                </div>
                                <div>
                                    Height: {charInfo.height} Inches
                                </div>
                            </CardText>
                        </Card>
                    </div>
                )
            }))}
        </div>
    )
}