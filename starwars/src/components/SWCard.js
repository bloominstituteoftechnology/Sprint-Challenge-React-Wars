import React from 'react';
import './SWCard.css';

const SWCard = (props) => {
    return (
    <div className="Container">
            <div className = 'SWCard' >
                <div className = 'SWCard d w'>
                    <h2 className="white">{props.it.name}</h2>
                </div>
                <div className='SWCard d' >
                <h4>Gender: {props.it.gender}</h4>
                <h4>Mass: {props.it.mass}</h4>

                
                
                <h4>Height: {props.it.height}</h4>

                </div>
                <div className='SWCard d' >
                <h4>Eye Color: {props.it.eye_color}</h4>
                <h4>Hair Color: {props.it.hair_color}</h4>
                
                <h4>Skin Color: {props.it.skin_color}</h4>
                <h4>{props.it.created}</h4>
                <h4>Birth Year:{props.it.birth_year}</h4>



                

                </div >
                <div>
                    
                </div>



            </div>
        
     

    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  );
}

export default SWCard;
