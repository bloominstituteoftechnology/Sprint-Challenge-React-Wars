import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Card from './Card'

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
    const [homeWorld, setHomeWorld] = useState('Earth')

    useEffect(() => {
        swapiPageArray.forEach(number => {
            axios.get(`${swapi}/${swapiCategory}/${number}/`)
            .then(response => {
                console.log('SWAPI online:', response)
                let apiName = response.data.name
                let apiHeight = response.data.height
                let apiMass = response.data.mass
                let apiHairColor = response.data.hair_color
                let apiEyeColor = response.data.eye_color
                let apiSkinColor = response.data.skin_color
                let apiBirthYear = response.data.birth_year
                let apiGender = response.data.gender
                let apiHomeWorld = response.data.homeworld

                setName(apiName)
                setHeight(apiHeight)
                setMass(apiMass)
                setHairColor(apiHairColor)
                setEyeColor(apiEyeColor)
                setSkinColor(apiSkinColor)
                setBirthYear(apiBirthYear)
                setGender(apiGender)

                axios.get(`${apiHomeWorld}`)
                    .then(response => setHomeWorld(response.data.name))
                    .catch(error => console.log('API retrieval failed:', error))
            })
            .catch(error => {
                    console.log('API retrieval failed:', error)
            })
        })
        
    }, [])

    return (
        <div>
            <Card name={name}/>
        </div>
    )
}

export default Data