import React from 'react'
import '../components/StarWars.css';

function GeneralData(props) {
    const { item }  = props;
    return (
        <div className='generalData container'>
            <p>{item.name}</p>
            <p>{item.birth_year}</p>
            <p>{item.species}</p>
        </div>
    )
}

export default GeneralData 