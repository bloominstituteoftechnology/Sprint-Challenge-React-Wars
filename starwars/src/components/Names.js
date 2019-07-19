import React from 'react';

 function Name(props) {

     return (
        <div> 
             <h1>  {props.info.name}</h1>
            <h2> height: {props.info.height}</h2>
            <h2> mass: {props.info.mass}</h2>
            <h2> gender: {props.info.gender}</h2>
             <h2> hair:{props.info.hair_color}</h2>
             <h2> eye_color:  {props.info.eye_color}</h2>
             <h2> birth year:   {props.info.birth_year}</h2>
        </div>
    );
};

  export default Name; 