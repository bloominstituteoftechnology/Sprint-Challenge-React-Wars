import React from 'react';
// import './SymbolsBoxs.css';

const SWCard = (props) => {
    return (
    <div className="SWCard">
            <div>
                <div className = 'SWCard d'>
                    <h2>{props.it.name}</h2>
                </div>
                <div className='SWCard d' >

                <h4>Birth Year: {props.it.birth_year}</h4>
                <h4>Eye Color: {props.it.eye_color}</h4>
                <h4>Height: {props.it.height}</h4>

                </div>
                <div className='SWCard d' >
                <h4>Gender: {props.it.gender}</h4>
                <h4>Hair Color: {props.it.hair_color}</h4>
                <h4>Mass: {props.it.mass}</h4>
                <h4>Skin Color: {props.it.skin_color}</h4>



                <h4>{props.it.created}</h4>

                </div >
                <div>
                    
                </div>



            </div>
        
     

    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  );
}

export default SWCard;
