import React from 'react';
//  import { Link } from 'react-router-dom';
 
 const characterCard = () => {
   return <div className="TestTextYellow"><p>CharacterCard Module SEZ: I'm a character!</p> 
           {/* <div>{this.state.name}</div> */}
           </div> 
}

 export default characterCard;// <div>
    //   <div>
        
    //     <div className="Card-row">
    //       <div className="Card-item">
    //         <Link to={`/api/people/${this.name}`}>
    //           <div className="Card-header"><h3>{this.name}</h3></div>
    //         </Link>
    //         <div className="Card-body">
    //           <div className="Sub-header">Physical Characteristics</div>
    //             <div className="Data-point">
    //               <p>Name: {this.name}</p>
    //               <p>Species: {this.species}</p>
    //               <p>Gender: {this.gender}</p>
    //               <p>Height: {this.height}</p>
    //               <p>Mass: {this.mass}</p>
    //               <p>Skin_Color: {this.skin_color}</p>
    //               <p>Eye_color: {this.eye_color}</p>
    //               <p>Hair_Color: {this.hair_color}</p>
    //             </div>
            
    //           <div className="Sub-Header">Demographic Data</div>
    //             <div>
    //               <p>Created: {this.created}</p>
    //               <p>Birth Year: {this.birth_Year}</p>
    //               <p>Homeworld: {this.homeworld}</p>
    //               <p>Starships: {this.starships}</p>
    //               <p>Vehicles: {this.vehicles}</p>
    //               <p>Url: {this.url}</p>
    //             </div>  
    //         </div>
    //       </div> 
    //     </div>
    //   </div>
    // </div>
    //  const CharacterCard = ({props}) => {
//   const { name, species, gender, height, mass, skin_color, eye_color, hair_color, created, birth_year, homeworld, starships, vehicles, url } = props
//   return(
//     <div className="Card-row">
//       <div className="NoteItem">
//       <Link to={`/api/people/${props.name}`}>
//         <div className="Card-header"><h3>{props.name}</h3>
//         </div>
//       </Link>
//       <div className="Card-body">
//         <div className="Sub-Header">Physical Characteristics</div>
//           <p>Name: {props.name}</p>
//           <p>Species: {props.species}</p>
//           <p>Gender: {props.gender}</p>
//           <p>Height: {props.height}</p>
//           <p>Mass: {props.mass}</p>
//           <p>Skin_Color: {props.skin_color}</p>
//           <p>Eye_color: {props.eye_color}</p>
//           <p>Hair_Color: {props.hair_color}</p>
//         </div>
//         <div className="Sub-Header">Demographic Data</div>
//           <p>Created: {props.created}</p>
//           <p>Birth Year: {props.birth_Year}</p>
//           <p>Homeworld: {props.homeworld}</p>
//           <p>Starships: {props.starships}</p>
//           <p>Vehicles: {props.vehicles}</p>
//           <p>Url: {props.url}</p>
//         </div>
//     </div>
//   )
// }