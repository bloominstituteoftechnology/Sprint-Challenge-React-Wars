import React from 'react'
import '../components/StarWars.css';

function Character(props) {
    const { item , viewName}  = props;
    return (
        <div className='character'>
            <p>hello this is a character</p>
            <div>
                {viewName}
                {item.name}
            </div>
        </div>
    )
}

export default Character 