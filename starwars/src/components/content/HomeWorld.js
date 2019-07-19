import React,{useState} from 'react'
import axios from 'axios'

const HomeWorld = ({homeWorld}) => {
    const [name, setName] = useState('')

    axios.get(`${homeWorld}`)
    .then(response=>{
        setName(response.data.name)
    })
    .catch(error => {
        console.log('API retrieval failed:', error)
    })

    return <p>Homeworld: {name}</p>
}

export default HomeWorld