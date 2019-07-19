import React,{useState, useEffect} from 'react'
import axios from 'axios';

function Data() {
    // Values related to SWAPI
    const swapi = 'https://swapi.co/api'
    const swapiCategory = 'people'
    const swapiPageArray = [1,2,3,4]

    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')
    const [hairColor, setHairColor] = useState('')
    const [eyeColor, setEyeColor] = useState('')
    const [skinColor, setSkinColor] = useState('')
    const [birthYear, setBirthYear] = useState('')
    const [gender, setGender] = useState('')
    const [homeWorld, setHomeWorld] = useState('')

    useEffect(() => {
        swapiPageArray.forEach(number => {
            axios.get(`${swapi}/${swapiCategory}/${number}/`)
                .then(response => {
                    console.log('SWAPI online:', response)
                })
                .catch(error => {
                    console.log('API retrieval failed:', error)
                })
        })
        
    }, [swapiPageArray])

    return (
        <div></div>
    )
}

export default Data