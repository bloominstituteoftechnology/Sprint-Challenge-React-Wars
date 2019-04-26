import React from "react"

const Cards = props => {
return(
   <div>
       <h2>{props.data.name}</h2>
       <p>Gender:{props.data.Gender}</p>
       <p>Hair Color:{props.data.hair_color}</p>
       <p>Eye Color:{props.data.eye_color}</p>
       <p>Height:{props.data.height}</p>
       <p>Skin Color:{props.data.skin_color}</p>
       <p>Date of Birth:{props.data.birth_year}</p>
       
   </div>
)
}