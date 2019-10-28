import React, {useState, useEffect} from "react"; 
import axios from "axios";
import StarCard from './StarCard';
import { 
} from 'reactstrap';

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
        <div>{heros.map(item => {

            //  console.log(item.name)

             console.log(item.mass)
            return(

                <div class="container">
                <div class="row">
                  <div class="col">
                    <StarCard character = {item.name} howTall= {item.height} weight = {item.mass} />  
                  </div>
                </div>
              </div>
           )
        })}

        </div>
);

};   