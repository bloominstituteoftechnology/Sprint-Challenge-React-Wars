import React from 'react';

 function Character(props) {

    return (
        <div> 
             <h1>  Name: (props.info.name === "XYZ") ?
            {props.info.name}
            :
            {props.info.name} </h1>
            <h2> Height:{props.info.height}</h2>
            <h2> Gender:{props.info.gender}</h2>
             <h2> Hair Color:{props.info.hair_color}</h2>
             <h2> Eye Color:{props.info.eye_color}</h2>
             <h2> Birth Year:{props.info.birth_year}</h2>
        </div>
    );
};
  export default Character; 