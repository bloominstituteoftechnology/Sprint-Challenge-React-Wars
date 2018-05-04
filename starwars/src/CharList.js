import React from 'react';
import {Card, CardText, CardTitle} from 'reactstrap';
import "./CharList.css"

const CharList = props => {
    console.log(props.charList)
    return(
        <div>
            {props.charList.map((character, index) => {
                return(
                    <div key={character.created} className="cards">
                        <Card>
                            <div className="card-content">
                                <div className="name">
                                    <CardTitle> {character.name} </CardTitle>
                                </div>
                                <div className="text">
                                    <CardText> Gender: {character.gender} </CardText>
                                    <CardText> DOB: {character.birth_year} </CardText>
                                    <CardText> Height (cm): {character.height} </CardText>
                                    <CardText> Weight (kg): {character.mass} </CardText>
                                    <CardText> Hair Color: {character.hair_color} </CardText>
                                    <CardText> Eye Color: {character.eye_color} </CardText>
                                    <CardText> Skin Color: {character.skin_color} </CardText>
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            })}
            
        </div>
    )
}

export default CharList;