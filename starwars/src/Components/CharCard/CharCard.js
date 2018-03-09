import React from "react";
import './CharCard.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export const CharCard = (props) => {
    return(
        <div>
            {props.post.map((charInfo => {
                return(
                    <div class="topCard">
                        <Card>
                            <CardTitle>
                                {charInfo.name}
                            </CardTitle>
                        </Card>
                    </div>
                )
            }))}
        </div>
    )
}