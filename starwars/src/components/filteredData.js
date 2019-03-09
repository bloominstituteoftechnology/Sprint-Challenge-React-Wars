import React from 'react'
import '../components/StarWars.css';

function FilteredData(props) {
    const { eye_color, gender, height, mass }  = props;
    return (
        <div className='filteredData container'>
            <p>{eye_color}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{mass}</p>
        </div>
    )
}

export default FilteredData 