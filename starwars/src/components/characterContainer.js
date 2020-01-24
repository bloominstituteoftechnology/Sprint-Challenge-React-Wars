import React from 'react';
import CharPage from './charPage';





const CharacterContainer = props => {

    return (

        <div className='character-cont'>

           
           {props.charData.map(e =>(
               <CharPage key={e.name} charInfo = {e} />
               
           ))}

           

        </div>

    )
}


export default CharacterContainer;