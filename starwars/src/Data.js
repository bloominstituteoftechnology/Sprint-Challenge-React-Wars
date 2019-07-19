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
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        // swapiPageArray.forEach(number => {
            axios.get(`${swapi}/${swapiCategory}/`)
            .then(response => {
                console.log('SWAPI online:', response)
                const data = response.data.results
                setCharacters(data)
                // let apiName = response.data.name
                // let apiHeight = response.data.height
                // let apiMass = response.data.mass
                // let apiHairColor = response.data.hair_color
                // let apiEyeColor = response.data.eye_color
                // let apiSkinColor = response.data.skin_color
                // let apiBirthYear = response.data.birth_year
                // let apiGender = response.data.gender
                // let apiHomeWorld = response.data.homeworld

                // setName(apiName)
                // setHeight(apiHeight)
                // setMass(apiMass)
                // setHairColor(apiHairColor)
                // setEyeColor(apiEyeColor)
                // setSkinColor(apiSkinColor)
                // setBirthYear(apiBirthYear)
                // setGender(apiGender)

                // axios.get(`${apiHomeWorld}`)
                // .then(response => setHomeWorld(response.data.name))
                // .catch(error => console.log('API retrieval failed:', error))
            })
            .catch(error => {
                console.log('API retrieval failed:', error)
            })
        // })  
    }, [])

    return (
        <div className='card-grid'>
            {characters.map(char=> (
                <Card name={char.name} height={char.height} mass={char.mass} hairColor={char.hairColor} eyeColor={char.eyeColor} skinColor={char.skinColor} birthYear={char.birthYear} gender={char.gender} homeWorld={char.homeWorld}/>
            ))}
            {/* <Card name={name} height={height} mass={mass} hairColor={hairColor} eyeColor={eyeColor} skinColor={skinColor} birthYear={birthYear} gender={gender} homeWorld={homeWorld}/> */}
        </div>
    )
}

export default Data