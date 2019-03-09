import React from 'react'
import '../components/StarWars.css';

import GeneralData from './generalData'
import FilteredData from './filteredData'

function Character(props) {
    const { item , viewName}  = props;

    if (viewName === 'default') {
        
        return (
            <div className='character'>
                <GeneralData item={item}/>
                <FilteredData 
                    eye_color={item.eye_color}
                    gender={item.gender}
                    height={item.height}
                    mass={item.mass}
                />
            </div>
        )
    } else if (viewName === 'admin') {
        
    }

}

export default Character 