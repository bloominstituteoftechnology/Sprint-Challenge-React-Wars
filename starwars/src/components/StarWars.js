import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './characterCard';


const StarWars = () => {
    const [data] = useState("");
     
     


    useEffect(() => {
        function getPeople() {
        axios
            .get(
            'https://swapi.co/api/people/'
            
            )
            .then(response => {
                console.log(response.data.results);   
            })
            .catch (error => console.log(error));
        }
        getPeople();
    } ,[]);

    
    return (

        <section className="container">
            <div className = "topSection">
                <h1 className = "mainHeader">
                     React Wars
                </h1>
                <CharacterCard />
            </div>
            <div className = "pictureCard">
            {/*     <h2>
                    {name}
                </h2>
                <h3>
                    {gender}
                </h3> */}
                 
                
            </div>
        </section>
    )
};

export default StarWars;