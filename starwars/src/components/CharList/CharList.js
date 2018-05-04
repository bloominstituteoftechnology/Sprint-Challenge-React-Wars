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

                    <CardTitle>Name: {char.name}</CardTitle>
                    <CardText>{char.birth_year}</CardText>
                    <CardText>{char.eye_color}</CardText>
                    <CardText>{char.gender}</CardText>
                    <CardText>{char.hair_color}</CardText>
                    <CardText>{char.height}</CardText>
                    <CardText>{char.mass}</CardText>
                    <CardText>{char.skin_color}</CardText>

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

