import React, { useState, useEffect} from "react";
import axios from "axios";
import Namelist from "./NameList";
import { Container, Row} from "reactstrap";

function SWNames(){
const [charName, setCharName] = useState([]);

    useEffect(() =>{
        axios
        .get("https://swapi.co/api/people/")
        .then(response =>{
            setCharName(response.data.results);
            console.log(response)
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

    return(

        <Container>
            <Row>
            {charName.map((character)=>{
                return(
                    
                    <Namelist  
                        name = {character.name}
                        gender= {character.gender}
                        mass= {character.mass}
                    />
                )}
            )}
            </Row>
        </Container>
    );
};
export default SWNames;