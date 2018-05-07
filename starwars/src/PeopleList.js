import React from "react"; 

const PeopleList = props => {
    
    return( <div className= "peopleWrapper">

                {props.starwarsChars.map(person => {
                if(person.gender ==='male' && person.starships.length !== 0)   return (
                        <div key={person.name + person.gender + person.starships}>
                            {person.name} {person.gender} <img className= "ship-img" src={person.starships}/>



                        </div>


                    );

                })}
            </div>
        
        
        
        
        
        
        
        
        
        )








}

export default PeopleList;