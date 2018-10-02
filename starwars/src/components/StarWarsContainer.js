import React from "react"
import StarWarsCard from "./StarWarsCard";

class StarWarsContainer extends React.Component {
    render(){
// const StarWarsContainer = (props) => {
    return (
        <div>
          {this.props.starwarsChars.map(character =>
            <StarWarsCard
              character={character}
              key={character.name} />)}
        </div>
      );
// }

    }

}
// class StarWarsContainer extends React.Component {
    
    

//     render(){
//         return(

//             <div>

//                 <div>
//                     {this.props.starwarsChars.map(char => {

//                      return  <StarWarsCard 

//                         key={char.name} 
                        
//                         starwarsChars={this.props.char}


//                         />
                        
//                     })}

//                 </div>

//                 <div>{this.props.starwarsChars.gender}</div>

//             </div>
//         )
//     }
// }


export default StarWarsContainer ;