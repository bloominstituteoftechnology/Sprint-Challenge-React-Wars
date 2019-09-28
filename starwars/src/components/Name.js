import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card'

export default function Grid({ limit }) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(res => {
            const data = res.data.results
            setData(data)
        })
    }, [])

    console.log(data);
    return (
        <div className='name'>
            {data.map(banana => <Card data={banana}/>)}
        </div>
        
    )
}

