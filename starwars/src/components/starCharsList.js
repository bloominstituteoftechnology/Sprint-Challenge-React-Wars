import React from 'react';
import './StarWars.css';
import StarChars from './starChars'

const StarCharsList = (props) =>{
    return(
        <div className='chars-container'>
            {props.info.map(item => <StarChars  key={item.created} obj={item}/> )}
        </div>
    )
} 
export default StarCharsList;