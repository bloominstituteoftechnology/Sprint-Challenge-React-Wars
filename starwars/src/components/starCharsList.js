import React from 'react';
import './StarWars.css';
import StarChars from './starChars'

const StarCharsList = (props) =>{
    return(
        <div>
            {props.info.map(item => <StarChars name={item.name} yob={item.birth_year}  key={item.created}  /> )}
        </div>
    )
}
export default StarCharsList;