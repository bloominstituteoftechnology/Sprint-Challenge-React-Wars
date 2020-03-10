import React, {useEffect, useState} from 'react'
import axios from "axios";
import CharsCard from './CharsCard';


function Chars() {
    const [chars, setChars] = useState([])

    useEffect(() => { //get data from API 
        axios
        .get("https://swapi.co/api/people/")
        .then(res => { console.log(res.data.results)
            setChars(res.data.results)
        });
    }, [])

    // useEffect(() => {
    //     console.log("Chars are here!", chars)
    // }, [chars])

    return <div> 
        <ul>{chars.map(char => { //map through to pass the data and add card here
            return <CharsCard name={char.name} yebirth_yearar={char.birth_year} gender={char.gender} height={char.height}/>
            })}</ul>
        </div>;
}

export default Chars;