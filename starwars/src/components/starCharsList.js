import React from 'react';
import './StarWars.css';
import StarChars from './starChars'

const StarCharsList = (props) =>{
    return(
        <div className='chars-container'>
            {props.info.map(item => <StarChars info={[item.name, item.birth_year,]} name={item.name} yob={item.birth_year}  key={item.created}/> )}
        </div>
    )
}
export default StarCharsList;