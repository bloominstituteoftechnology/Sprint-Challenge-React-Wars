import React from 'react';
import Character from './Character';

const characterList = props => {
   return (
       <div className = 'characterList'>
           {props.characters.map(item => (
               <Character
                   character = {item}
                   key = {item.created}
               />
           ))}
       </div>
   )
}


export default characterList;