import React from "react";
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
const cardCont = {
    width: '30%',
    display: 'inline-flex',
    justifyContent: 'end',
    border: '3px solid yellow',
    background: 'inherit',
    fontWeight: 'bold',
    color: 'blue',
    fontSize: '120px',
    margin: 15,
    fontFamily: 'ITC Serif Gothic '
}
const subStyle = {
    // boxStyling: 'block'
    background: 'red',
    color: 'yellow',
    // display: 'flex',
    width: '100%',
    opacity: '0.5',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    fontFamily: 'ITC Serif Gothic '
}
const charSt = {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontFamily: 'ITC Serif Gothic '
}
const keyFont = {
    textDecoration: 'underline',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'ITC Serif Gothic '
}
const CardLogic = props => {
    // constructor(props) {
    //     super(props);

    // }
    // render() {
        return (
            <div>
                  {/* { props.data.films.map((film) =>  (<h1>{film}</h1>) )}; */}
                  {/* {...props.data.films} */}
                  {console.log("props in logic: ", props.data.films)}

                {props.data.map(((character, index) => (
                   
                    <Card style={cardCont} key={character.name + index} >
                        <CardBody>
                            <CardTitle style={charSt} >
                                {character.name}
                               
                            </CardTitle>
                    
                            <CardSubtitle style={subStyle} ><span style={keyFont}>Birth Year </span>: {character.birth_year}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Created </span>: {character.created}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Edited </span>: {character.edited}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Eye Color </span>: {character.eye_color}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Films </span>: {character.films}  </CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Gender </span>: {character.gender}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Hair Color </span>: {character.hair_color}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Height </span>: {character.height}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Homeworld </span>: {character.homeworld}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Mass </span>: {character.mass}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Skin Color </span>: {character.skin_color}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Species </span>: {character.species}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Starships </span>: {character.starships}</CardSubtitle>
                            <CardSubtitle style={subStyle}><span style={keyFont}>Vehicles </span>: {character.vehicles}</CardSubtitle>


                        </CardBody>
                    </Card>
                )))}


            </div>
        );
    // }
};
export default CardLogic;
