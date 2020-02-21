import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Grid(){
    const [swapiData, setSwapiData] = useState({})

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(response => {
            // console.log(response.data.results[0].name);

            console.log(response.data)

            setSwapiData(response.data)
            
           
          })
          .catch(error => {
            console.log("the data was not return", error);
          });
      }, []);
            
     


    return <div></div>
}