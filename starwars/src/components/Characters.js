import React from 'react';
import './StarWars.css';



        
    



const CharacterCards=(props)=>{
        return(
            <div className="section">
                {props.chars.map(char=>{
                    return(
                  <div className="card">
                    <div className="person">
                        <p className="birth">Born in {char.birth_year}</p>
                        <p className="name">Name: {char.name}</p>
                    </div>
                    <div className="genetics">
                       <ul>
                            <li>Gender:{char.gender}</li>
                            <li>Mass:{char.mass}</li>
                            <li>Height:{char.height}</li>
                            <li>Eye Color:{char.eye_color}</li>
                            <li>Hair Color:{char.hair_color}</li>
                            <li>Skin Color:{char.skin_color}</li>
                        </ul>
                    </div>    
                </div>
                    )
            })}
      </div> 
      ) 
}
export default CharacterCards;