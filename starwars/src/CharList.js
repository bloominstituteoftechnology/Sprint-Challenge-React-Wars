import React from 'react';
import {Card, CardText, CardTitle} from 'reactstrap';
import "./CharList.css"

const CharList = props => {
    console.log(props.charList)
    return(
        <div>
            {props.charList.map((character, index) => {
                return(
                    <div className="cards">
                        <Card className="card">
                            <CardTitle> {character.name} </CardTitle>
                            <CardText> {} </CardText>
                            <CardText> {} </CardText>
                            <CardText> {} </CardText>
                        </Card>
                    </div>
                )
            })}
            
        </div>
    )
}

export default CharList;