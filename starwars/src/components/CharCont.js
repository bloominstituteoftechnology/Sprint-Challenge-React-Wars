import React, {useState, useEffect} from 'react';
import CharCard from "./CharCard"
import axios from 'axios';


const CharCont = () => {

// const [dataArr, setDataArr] = useState([]);


// useEffect(() => {
//     axios.get('https://swapi.co/api/people/')
//     .then((res) => {
//         setDataArr(res.data.results);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// },[]);

return(
    <div>
        {/* {dataArr.map(character => {
            return(
                <CharCard 
                name={character.name}
                gender={character.gender}
                />
            )
        })} */}
    </div>  
)};

export default CharCont;