import React from 'react';
import './StarWars.css';
import StarChars from './starChars'

const StarCharsList = (props) =>{
    return(
        <div>
            {props.info.map(item => <StarChars obj={item} /> )}
        </div>
    )
}
export default StarCharsList;