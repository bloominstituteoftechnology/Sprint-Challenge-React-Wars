import React from 'react'
import '../components/StarWars.css';

function FilteredData(props) {
    const { eye_color, gender, height, mass }  = props;


    return (
        <div className='filteredData container'>
            
            
            <div>Eye Color: {eye_color}</div>
            <div>Gender: {gender}</div>
            <div>Height: {height}</div>
            <div>Mass: {mass}</div>
        </div>
    )
}

export default FilteredData 