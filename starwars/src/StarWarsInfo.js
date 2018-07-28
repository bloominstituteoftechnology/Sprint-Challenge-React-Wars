import React from 'react';

const StarWarsInfo=props=>{
    return (
        <div className='card'>
            <div className='card-content'>
                <p className='flow-text'>{'Name: '+props.starInfo.name}</p>
                <p className='flow-text'>{'Birth year: '+props.starInfo.birth_year}</p>
                <p className='flow-text'>{'Eye color: '+props.starInfo.eye_color}</p>
                <p className='flow-text'>{'Gender: '+props.starInfo.gender}</p>
                <p className='flow-text'>{'Hair color: '+props.starInfo.hair_color}</p>
                <p className='flow-text'>{'Height: '+props.starInfo.height}</p>
                <p className='flow-text'>{'Mass: '+props.starInfo.mass}</p>
                <p className='flow-text'>{'Skin color: '+props.starInfo.skin_color}</p>
            </div>
         </div>
    )
}
export default StarWarsInfo;