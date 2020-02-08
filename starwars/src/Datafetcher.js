import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cardcreator from "./components/Cardcreator";



const Datafetcher = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response)
                setData(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })
                
    },[])
            
    return (
        <div>
            {data.map(i => (
                <Cardcreator data = {i}/>
            ))}
            
        </div>
    );
}

export default Datafetcher;
