import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Container = props => {
    return(
        <div>
            {props.myContainer.map((myData, index) => 
            <Card key={"contents" + index}>
                <CardImg top width="100%" src={myData.url} alt={myData.name}/>

                
            <CardBody>
                <CardTitle>
                {myData.name}
                </CardTitle>
                <CardSubtitle>
                    Information regarding {myData.name}:
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
                    {/* <div>
                    for (let i = 0; i < {myData.films.length}; i++){
                        if (myData.films[i] !== )
                    }
                    </div> */}
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