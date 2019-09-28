import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid({ limit }) {
    const [name, setName] = useState([])
    
    useEffect(() => {
        // axios.get(`https://swapi.co/api/people/`)
        axios.get(`https://swapi.co/api/people/2/`)
        .then(res => {
            // const name = res.data.results.name
            // const holderArray = res.data.results.name.map()
            // console.log(holderArray);
            // console.log('coming from name.js ', res.data.results);

            const name = res.data.name
            setName(name)
            // console.log('Name fired' , res);
        })
    }, [])

    
    return (
        <div className='name'>
            {name}
        </div>
        
    )
}

// useEffect(() => {
//     axios.get(`https://henry-mock-swapi.herokuapp.com/api`)
//     .then(res => {
//         // const name = res.result.name

        
//         // const name = res.data.results.name
//         // console.log('coming from name.js ', res.data.results[0].name);
//         // var nameArray = res.data.results
//         // var myMap = new Map(nameArray)
//         // myMap.get(name);
//         // console.log(name);
//         // const name =  res.data.results[0].name
//         // setName(name)
//     })
// }, [])


// return (
//     <div className='name'>
//         {name}
//     </div>
    
// )
// }