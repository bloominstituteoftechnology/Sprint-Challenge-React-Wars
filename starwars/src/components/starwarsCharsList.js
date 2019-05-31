import React from 'react';

const starwarsCharsList = props => {
    return(
       <div className="container">
           {props.starwarsChars.map((starwarsChar) =>(
               <StarwarsChar key={starwarsChar.name} starwarsChar={starwarsChar}/>
           ))}
       </div>
    )
}

export default starwarsCharsList;