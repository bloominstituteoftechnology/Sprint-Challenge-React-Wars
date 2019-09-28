import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid({ limit }) {
    const [dob, setDob] = useState([])
    
    useEffect(() => {
        
        axios.get(`https://swapi.co/api/people/1/`)
        .then(res => {
            const dob = res.data.birth_year
            setDob(dob)
            // console.log('DOB fired' , res);
        })
    }, [])


    return (
        <div className='dob'>
            {dob}
        </div>
    )
}