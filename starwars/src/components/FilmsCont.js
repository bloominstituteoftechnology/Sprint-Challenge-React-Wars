import React from "react";
import Movies from "./Movies"


function FilmsCont (props) {

    
    const movies = props.films;
    //console.log(props)
    
    return (

        <div>

{movies.map(item => 
            <Movies key={item} film={item} /> ) }
            
        

        </div>
    )
}

export default FilmsCont;