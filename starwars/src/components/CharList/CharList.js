import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const CharList  = (props) => {

    return (


        <div className="character-wrapper ">

        <div className="row"> 

            { props.starwarsChars.map((char) => {
               return (
             
            <div className="col-12 col-sm-6 col-md-4" key={char.url}>   

               <Card>

                    <CardTitle><strong>Name: {char.name}</strong></CardTitle>
                    <CardText><strong>Birth Year:</strong> {char.birth_year}</CardText>
                    <CardText><strong>Eye Color:</strong> {char.eye_color}</CardText>
                    <CardText><strong>Gender:</strong> {char.gender}</CardText>
                    <CardText><strong>Hair Color:</strong> {char.hair_color}</CardText>
                    <CardText><strong>Height:</strong> {char.height}</CardText>
                    <CardText><strong>Mass:</strong> {char.mass}</CardText>
                    <CardText><strong>Skin Color:</strong> {char.skin_color}</CardText>

            </Card>

           </div> 
    
            )

            })

            }
          </div>  
        </div>
    )

}

export default CharList ; 

