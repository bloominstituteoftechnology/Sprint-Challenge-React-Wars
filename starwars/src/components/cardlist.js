import React from 'react';


const CardList = props => {
  return (
        <div className='allstarwarscards'>

            {props.starwars.map((starwar, index) => (
                <div className ='starwarCard'>
                <h2 key={starwar.index}>{starwar.name}</h2>
                <h4 className= 'bYear'>Year Born:{starwar.birth_year}</h4>
                <h4 className='eyeColor'>Eye Color: {starwar.eye_color}</h4>
                <h4 className='gender'>Gender: {starwar.gender}</h4>
                <h4 className='hairColor'>Hair Color:  {starwar.hair_color}</h4>
                <h4 className='height'>Height: {starwar.height}</h4>
                <h4 className='mass'>Mass: {starwar.mass}</h4>

                </div>
            ))}
        </div>
    );
};





export default CardList;