import React from 'react';
import './StarWars.css';


const Splash = props => {

    return(

        <div className='splash' onClick={props.displayToggle}>
        <h2>
            A long time ago
        </h2>
        <h2>
            in a galaxy far far away
        </h2>
        </div>
        
    )


}


export default Splash