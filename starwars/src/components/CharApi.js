import React, {useState, useEffect} from "react";
import axios from "axios";
import CharCard from "./CharCard";
//http https://swapi.co/api/people/1/

function CharApi() {
    const [charInfo, setCharInfo] = useState([]);
    const [counter, updateCounter] = useState(1);
  

    useEffect(() => {
        axios   
            .get(`https://swapi.co/api/people/${counter}/`)
                .then(res => {
                    setCharInfo([...charInfo, res.data]);
                    updateCounter(counter + 1);
                })
                .catch(error => {
                    console.log("ERROR", error);
                });
                }, [counter]);
                         
                return(
                    <div className = "container">
                        <div className = "character">
                                {charInfo.map((char, index) => {
                       return (
                            <CharCard 
                            key={index} 
                            name={char.name} 
                            gender={char.gender} 
                            hair={char.hair_color} 
                            eyes={char.eye_color} 
                            height={char.height} 
                            birthYear={char.birth_year} 
                            skinColor={char.skin_color}  
                            />
                       );
                   }, [])};
                  </div>
                </div>
                );
                }

            export default CharApi;