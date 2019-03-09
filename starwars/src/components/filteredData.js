import React from 'react'
import '../components/StarWars.css';

function FilteredData(props) {
    const { eye_color, gender, height, mass }  = props;
    return (
        <div className='filteredData container'>
            <p>Eye Color: {eye_color}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </div>
    )
}

export default FilteredData 