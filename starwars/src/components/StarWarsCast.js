import React, {useState, useEffect} from "react"; 
import axios from "axios";
import StarCard from './StarCard';
import {Container, Row } from 'reactstrap';

export default function StarsData() {
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response =>{
             console.log(response.data.results);
             setHeros(response.data.results);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        })
    }, [])

return(
      
        <div>
        {heros.map((item) => {

            return(

                <div class="Container">
                <div class="Row">
                  <div class="col">
                    <StarCard 
                    character = {item.name} 
                    howTall= {item.height} 
                    weight = {item.mass} 
                    gender= {item.gender}
                    key = {item.id}
                    hair_color = {item.hair_color}
                    />  
                  </div>
                </div>
              </div>
           )
        })}

        </div>
);

};    