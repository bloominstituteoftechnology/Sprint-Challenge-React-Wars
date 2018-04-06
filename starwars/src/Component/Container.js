import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Container = props => {
    return(
        <div className="container d-flex flex-wrap justify-content-around">
        {props.myContainer.map((myData, index) => 
            <Card className="Card col-5 d-flex border border-danger bg-light mb-5 rounded" key={"contents" + index}>
                {/* <CardImg top width="100%" src={myData.url} alt={myData.name}/> */}
                <CardBody className="Card__body text-left">
                    <CardTitle className="Card__Title text-center font-weight-bold p-1 rounded-circle bg-dark text-white">
                        {myData.name}
                    </CardTitle>
                    <CardSubtitle className="Card__Subtitle text-center pb-1">
                        Key Information:
                    </CardSubtitle>
                    <CardText>
                        <div>
                            Eye Color: {myData.eye_color}
                        </div>
                        <div>
                            Birth Year: {myData.birth_year}
                        </div>
                        <div>
                            Gender: {myData.gender}
                        </div>
                        <div>
                            Hair Color: {myData.hair_color}
                        </div>
                        <div>
                            Height: {myData.height}
                        </div>
                        <div>
                            Mass: {myData.mass}
                        </div>
                        <div>
                            Skin Color: {myData.skin_color}
                        </div>
                        <div>
                            Films: {myData.films[0]}
                        </div>
                    </CardText>
                </CardBody>
            </Card>)}
        </div>
    )
}
    
export default Container;